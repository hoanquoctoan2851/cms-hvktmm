import JobState from "@/core/models/JobState";
import { Observable } from "rxjs";
declare type Fn<Result = any> = (...args: any) => Observable<Result>;
interface UseJobOptions {
    showLoading?: boolean;
    wait?: number;
    immediate?: boolean;
}
export default function useJob<T extends Fn>(fn: T, options?: UseJobOptions): {
    run: (...args: Parameters<T>) => void;
    cancel: () => void;
    state: import("vue").Ref<JobState | undefined>;
    processing: import("vue").ComputedRef<boolean>;
    result: import("vue").Ref<(ReturnType<T> extends Observable<infer R> ? R : any) | undefined>;
    error: import("vue").Ref<any>;
};
export declare function fnJob<T extends Fn>({ api, fnSuccess, fnError, options, }: {
    api: T;
    fnSuccess: (response: ReturnType<T> extends Observable<infer R> ? R : any) => void;
    fnError?: (err: any) => any;
    options?: UseJobOptions;
}): {
    run: (...args: Parameters<T>) => void;
    cancel: () => void;
    state: import("vue").Ref<JobState | undefined>;
    processing: import("vue").ComputedRef<boolean>;
    result: import("vue").Ref<void | Promise<any> | undefined>;
    error: import("vue").Ref<any>;
};
export {};
