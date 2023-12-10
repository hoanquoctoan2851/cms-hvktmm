import { Api } from "@/core/api";
import env from "@/core/env";
import "@/core/models/api";
export class Repository {
    apiUrl;
    api;
    paths = {
        base: "",
        create: "",
        get: "",
        update: () => "",
        delete: () => "",
        getOne: () => "",
    };
    constructor(apiUrl, tokenType) {
        this.apiUrl = apiUrl || env.API_BASE;
        this.api = new Api(this.apiUrl);
        if (typeof tokenType !== "undefined") {
            this.api.setAuthorizationTokenType(tokenType);
        }
    }
    create(data) {
        return this.api.post(this.paths.create || this.paths.base, data);
    }
    update(id, data) {
        return this.api.put((this.paths.update && this.paths.update(id)) || this.paths.base, data);
    }
    getOne(id) {
        return this.api.get((this.paths.getOne && this.paths.getOne(id)) || this.paths.base);
    }
    get(params) {
        return this.api.get(this.paths.get || this.paths.base, params);
    }
    delete(id) {
        return this.api.delete((this.paths.delete && this.paths.delete(id)) || this.paths.base);
    }
    request(config) {
        return this.api.request({
            ...config,
            url: this.paths.base + config.url,
        });
    }
}
