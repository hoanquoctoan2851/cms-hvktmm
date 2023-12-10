import { debounce } from "lodash";
import { onUnmounted } from "vue";
export default function useDebounceFn(fn, options) {
    const wait = options?.wait ?? 1000;
    const debounced = debounce(((...args) => {
        return fn(...args);
    }), wait, options);
    onUnmounted(() => {
        debounced.cancel();
    });
    return {
        run: debounced,
        cancel: debounced.cancel,
        flush: debounced.flush,
    };
}
