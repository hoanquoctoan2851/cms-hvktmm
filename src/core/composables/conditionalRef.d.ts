export default function conditionalRef<T = any>(value: T, conditionalFn: (newValue: T, oldValue?: T) => boolean): import("vue").Ref<T>;
