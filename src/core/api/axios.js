import { AxiosObservable } from "@/core/api/AxiosObservable";
export default function createAxiosInstance(url) {
    return AxiosObservable.create({
        baseURL: url || import.meta.env.VITE_API_URL,
    });
}
