declare type StorageType = "session" | "local";
export default function useStorage(key: string, type?: StorageType): import("vue").Ref<unknown>;
export {};
