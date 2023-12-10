import useDebounceFn from "@/core/composables/useDebounceFn";
import { useLoading } from "@/core/loading";
import JobState from "@/core/models/JobState";
import { catchError, map, of, Subject } from "rxjs";
import { computed, onUnmounted, ref } from "vue";
export default function useJob(fn, options) {
    const { startLoading, stopLoading } = useLoading();
    const subject = ref(new Subject());
    const jobSubscription = ref();
    const state = ref();
    const result = ref();
    const error = ref();
    const processing = computed(() => state.value === JobState.Processing);
    subject.value.subscribe({
        next: (observable) => {
            jobSubscription.value = observable.subscribe({
                next: (value) => {
                    result.value = value;
                },
                complete: () => {
                    state.value = JobState.Success;
                    error.value = undefined;
                    stopLoading();
                },
                error: (err) => {
                    state.value = JobState.Failed;
                    error.value = err;
                    stopLoading();
                },
            });
        },
    });
    const runNextCall = (...args) => {
        state.value = JobState.Processing;
        subject.value.next(fn(...args));
        if (options?.showLoading) {
            startLoading();
        }
    };
    const run = options?.wait !== 0
        ? useDebounceFn(runNextCall, {
            wait: typeof options?.wait === "number" ? options.wait : 100,
        }).run
        : runNextCall;
    const cancel = () => {
        jobSubscription.value?.unsubscribe();
        state.value = JobState.Standing;
        stopLoading();
    };
    if (options?.immediate) {
        run(...[]);
    }
    onUnmounted(() => {
        subject.value.unsubscribe();
        stopLoading();
    });
    return {
        run,
        cancel,
        state,
        processing,
        result,
        error,
    };
}
export function fnJob({ api, fnSuccess, fnError, options, }) {
    const { run: runJob, cancel, state, processing, result, error, } = useJob((...args) => {
        return api(...args).pipe(map((response) => {
            fnSuccess(response);
        }), catchError((error) => {
            fnError && fnError(error);
            return of(error);
        }));
    }, options);
    const run = (...args) => {
        runJob(...args);
    };
    return {
        run,
        cancel,
        state,
        processing,
        result,
        error,
    };
}
