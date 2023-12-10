import { ref, watch } from "vue";
export default function usePrevious(state) {
    const previous = ref();
    watch(state, (_, old) => {
        previous.value = old;
    });
    return previous;
}
