import { onMounted, onUnmounted } from "vue";
export default function useOnClickOutside(ref, callback) {
    function handleClickOutside(event) {
        if (ref.value && !ref.value.contains(event.target)) {
            callback(event);
        }
    }
    onMounted(() => {
        document.addEventListener("mousedown", handleClickOutside);
    });
    onUnmounted(() => {
        document.removeEventListener("mousedown", handleClickOutside);
    });
}
