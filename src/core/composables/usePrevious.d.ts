import { Ref } from "vue";
export default function usePrevious<T>(state: Ref<T>): Ref<T | undefined>;
