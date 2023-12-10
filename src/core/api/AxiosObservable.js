import "@/core/models/api";
import Axios from "axios";
import { Observable } from "rxjs";
export class AxiosObservable {
    config;
    axios;
    constructor(config) {
        if (config) {
            this.config = config;
        }
        this.axios = Axios.create(this.config);
    }
    get interceptors() {
        return this.axios.interceptors;
    }
    static create(config) {
        return new AxiosObservable(config);
    }
    request(config) {
        return new Observable((destination) => {
            const abortController = new AbortController();
            let onUploadProgress;
            let onDownloadProgress;
            if (config.uploadProgressSubscriber) {
                onUploadProgress = (progress) => {
                    if (config.uploadProgressSubscriber) {
                        config.uploadProgressSubscriber.next(progress);
                    }
                };
            }
            if (config.downloadProgressSubscriber) {
                onDownloadProgress = (progress) => {
                    if (config.downloadProgressSubscriber) {
                        config.downloadProgressSubscriber.next(progress);
                    }
                };
            }
            this.axios
                .request({
                ...config,
                onUploadProgress,
                onDownloadProgress,
                signal: abortController.signal,
            })
                .then((response) => {
                destination.next(response);
                destination.complete();
                config.uploadProgressSubscriber &&
                    config.uploadProgressSubscriber.complete();
                config.downloadProgressSubscriber &&
                    config.downloadProgressSubscriber.complete();
            })
                .catch((reason) => {
                destination.error(reason);
                config.uploadProgressSubscriber &&
                    config.uploadProgressSubscriber.error(reason);
            });
            return () => {
                abortController.abort();
            };
        });
    }
    get(url, config) {
        return this.request({
            url: url,
            method: "GET",
            ...config,
        });
    }
    delete(url, config) {
        return this.request({
            url: url,
            method: "DELETE",
            ...config,
        });
    }
    post(url, data, config) {
        return this.request({
            url: url,
            data: data,
            method: "POST",
            ...config,
        });
    }
    put(url, data, config) {
        return this.request({
            url: url,
            data: data,
            method: "PUT",
            ...config,
        });
    }
    patch(url, data, config) {
        return this.request({
            url: url,
            data: data,
            method: "PATCH",
            ...config,
        });
    }
}
