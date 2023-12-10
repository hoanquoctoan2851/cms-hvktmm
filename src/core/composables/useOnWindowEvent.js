import { onBeforeUnmount } from "vue";
export default function useOnWindowEvent(event, listener) {
    window.addEventListener(event, listener);
    onBeforeUnmount(() => {
        window.removeEventListener(event, listener);
    });
}
