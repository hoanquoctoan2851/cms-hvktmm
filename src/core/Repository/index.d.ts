import { Api } from "@/core/api";
import { ApiRequestConfig } from "@/core/models/api";
export interface RepositoryPath {
    /**
     * Base path to join with url passed to Repository.request method
     */
    base: string;
    /**
     * Create request's path url for repository
     */
    create?: string;
    /**
     * Get list request's path url for repository
     */
    get?: string;
    /**
     * Update request's path url for repository
     */
    update?: (id: string | number) => string;
    /**
     * Delete request's path url for repository
     */
    delete?: (id: string | number) => string;
    /**
     * Get one request's path url for repository
     */
    getOne?: (id: string | number) => string;
}
export declare abstract class Repository<ListRequest = any, CreateRequest = any, UpdateRequest = any, ListResponse = any, GetOneResponse = any, CreateResponse = any, UpdateResponse = any, DeleteResponse = any> {
    protected apiUrl: string;
    protected api: Api;
    protected paths: RepositoryPath;
    constructor(apiUrl?: string, tokenType?: TokenTypes | null);
    create(data: CreateRequest): import("rxjs").Observable<import("axios").AxiosResponse<CreateResponse, any>>;
    update(id: string | number, data: UpdateRequest): import("rxjs").Observable<import("axios").AxiosResponse<UpdateResponse, any>>;
    getOne(id: number | string): import("rxjs").Observable<import("axios").AxiosResponse<GetOneResponse, any>>;
    get(params?: ListRequest): import("rxjs").Observable<import("axios").AxiosResponse<ListResponse, any>>;
    delete(id: number | string): import("rxjs").Observable<import("axios").AxiosResponse<DeleteResponse, any>>;
    request<Response = any>(config: ApiRequestConfig): import("rxjs").Observable<import("axios").AxiosResponse<Response, any>>;
}
