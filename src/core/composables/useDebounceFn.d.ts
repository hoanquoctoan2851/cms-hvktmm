import { DebounceSettings } from "lodash";
declare type Fn = (...args: any) => any;
export default function useDebounceFn<T extends Fn>(fn: T, options?: DebounceSettings & {
    wait: number;
}): {
    run: T;
    cancel: () => void;
    flush: () => ReturnType<T> | undefined;
};
export {};
