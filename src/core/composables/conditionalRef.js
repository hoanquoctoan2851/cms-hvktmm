import { customRef } from "vue";
export default function conditionalRef(value, conditionalFn) {
    return customRef((track, trigger) => {
        return {
            get() {
                track();
                return value;
            },
            set(newValue) {
                if (conditionalFn(newValue, value)) {
                    value = newValue;
                }
                trigger();
            },
        };
    });
}
