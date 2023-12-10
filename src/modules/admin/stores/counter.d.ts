export declare const useCounterStore: import("pinia").StoreDefinition<"counter", {
    counter: number;
}, {
    doubleCount: (state: {
        counter: number;
    } & {}) => number;
}, {
    increment(): void;
}>;
