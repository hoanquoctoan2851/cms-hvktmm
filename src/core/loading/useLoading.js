import { inject } from "vue";
export const loadingInjectKey = Symbol("loading");
export default function useLoading() {
    return inject(loadingInjectKey, {
        startLoading: () => { },
        stopLoading: () => { },
    });
}
