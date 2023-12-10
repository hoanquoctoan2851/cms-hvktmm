import { customRef } from "vue";
const getItem = (key, storage) => {
    const value = storage.getItem(key);
    if (!value) {
        return null;
    }
    try {
        return JSON.parse(value);
    }
    catch (error) {
        return value;
    }
};
export default function useStorage(key, type = "session") {
    let storage;
    switch (type) {
        case "local":
            storage = localStorage;
            break;
        case "session":
            storage = sessionStorage;
            break;
    }
    if (!type) {
        throw new Error("type must be 'session' or 'local'");
    }
    return customRef((track, trigger) => {
        return {
            get() {
                track();
                return getItem(key, storage);
            },
            set(newVal) {
                storage.setItem(key, JSON.stringify(newVal));
                trigger();
            },
        };
    });
}
