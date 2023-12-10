import createAxiosInstance from "@/core/api/axios";
import "@/core/api/AxiosObservable";
import { RequestHeaderContentType, } from "@/core/models/api";
import { clearUndefinedProperties, formData, urlEncoded, } from "@/core/utilities";
import TokenManager from "@/core/utilities/TokenManager";
import "axios";
import { merge } from "lodash";
export class Api {
    axiosInstance;
    defaultConfig = {
        contentType: "json",
        cache: false,
    };
    // Token
    tokenType = undefined;
    static tokenType = "base_token";
    static setAuthorizationTokenType(type) {
        Api.tokenType = type;
    }
    // Params
    static globalParams = {};
    static setGlobalParams(data) {
        Api.globalParams = {
            ...Api.globalParams,
            ...data,
        };
    }
    // Body data
    static globalData = {};
    static setGlobalData(data) {
        Api.globalData = {
            ...Api.globalData,
            ...data,
        };
    }
    // Headers
    static globalHeaders = {};
    static setGlobalHeaders(headers) {
        Api.globalHeaders = {
            ...Api.globalHeaders,
            ...headers,
        };
    }
    // Interceptors
    static interceptors = new Set();
    static addInterceptor(interceptor) {
        Api.interceptors.add(interceptor);
        return () => {
            Api.removeInterceptor(interceptor);
        };
    }
    static removeInterceptor(interceptor) {
        Api.interceptors.delete(interceptor);
    }
    constructor(url, config) {
        this.axiosInstance = createAxiosInstance(url);
        this.setupInterceptor();
        if (config) {
            this.defaultConfig = {
                ...this.defaultConfig,
                ...config,
            };
        }
    }
    setAuthorizationTokenType(type) {
        this.tokenType = type;
    }
    getTokenType(config) {
        if (config.tokenType !== undefined) {
            return config.tokenType;
        }
        if (this.tokenType !== undefined) {
            return this.tokenType;
        }
        return Api.tokenType;
    }
    /**
     * Set up interceptors
     */
    setupInterceptor() {
        this.axiosInstance.interceptors.request.use(async (config) => {
            config = await this.useRequestInterceptors(config);
            // Merge default config
            config = merge({}, this.defaultConfig, config);
            // Merge global header
            config.headers = {
                ...config.headers,
                ...Api.globalHeaders,
                "Content-Type": config.contentType === "formData"
                    ? false
                    : config.contentType === "urlEncoded"
                        ? RequestHeaderContentType.UrlEncoded
                        : RequestHeaderContentType.Json,
            };
            if (!config.preparedData) {
                config.params = urlEncoded(clearUndefinedProperties({
                    ...config.params,
                    ...Api.globalParams,
                }));
                config.data = {
                    ...config.data,
                    ...Api.globalData,
                };
                clearUndefinedProperties(config.data);
                if (JSON.stringify(config.data) === "{}") {
                    config.data = undefined;
                }
                else {
                    switch (config.contentType) {
                        case "formData":
                            config.data = formData(config.data);
                            break;
                        case "urlEncoded":
                            config.data = urlEncoded(config.data);
                    }
                }
                config.preparedData = true;
            }
            // Add token
            const tokenType = this.getTokenType(config);
            const token = tokenType ? TokenManager.getToken(tokenType) : null;
            if (token) {
                config.headers.Authorization = "Bearer " + token;
            }
            // Disable cache
            const cache = typeof config.cache !== "undefined"
                ? config.cache
                : this.defaultConfig.cache;
            if (cache === false) {
                config.headers["Cache-Control"] = "no-cache";
                config.params.axios_timestamp = new Date().getTime();
            }
            return config;
        });
        this.axiosInstance.interceptors.response.use((response) => {
            return this.useSuccessResponseInterceptor(response);
        }, async (error) => {
            const result = await this.useErrorResponseInterceptor(error);
            return result && !result?.message && result.data
                ? result
                : Promise.reject(result);
        });
    }
    async useRequestInterceptors(config) {
        for (const interceptor of Api.interceptors) {
            if (interceptor.request) {
                config = await interceptor.request(config);
            }
        }
        return config;
    }
    async useErrorResponseInterceptor(error) {
        for (const interceptor of Api.interceptors) {
            if (interceptor.response && interceptor.response.error) {
                try {
                    error = await interceptor.response.error(error, (err) => {
                        err = err ?? error;
                        return err;
                    }, this.axiosInstance);
                }
                catch (err) {
                    // console.log(err);
                }
            }
        }
        return error;
    }
    async useSuccessResponseInterceptor(response) {
        for (const interceptor of Api.interceptors) {
            if (interceptor.response && interceptor.response.success) {
                response = await interceptor.response.success(response);
            }
        }
        return response;
    }
    /**
     * End setup interceptors
     */
    request(config) {
        return this.axiosInstance.request(config);
    }
    post(url, data, config) {
        return this.axiosInstance.post(url, data, config);
    }
    put(url, data, config) {
        return this.axiosInstance.put(url, data, config);
    }
    patch(url, data, config) {
        return this.axiosInstance.patch(url, data, config);
    }
    get(url, data, config) {
        return this.axiosInstance.get(url, {
            ...config,
            params: data,
        });
    }
    delete(url, data, config) {
        return this.axiosInstance.delete(url, {
            ...config,
            params: data,
        });
    }
}
