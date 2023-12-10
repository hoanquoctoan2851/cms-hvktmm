export declare const loadingInjectKey: unique symbol;
export default function useLoading(): {
    startLoading: () => void;
    stopLoading: () => void;
};
