import { Repository } from "@/core/Repository";
import { ChangePasswordRequest, ChangePasswordResponse, CreateUserResponse, DeleteRequest, GetInfoRequest, ListLetterResponse, ListUserRequest, ListUserResponse, UpdateInfoRequest, UpdateInfoResponse } from "@/models/User";
import { CreateUserRequest } from "./../models/User";
declare class UserRepository extends Repository {
    constructor();
    addUser(payload: CreateUserRequest): import("rxjs").Observable<import("axios").AxiosResponse<CreateUserResponse, any>>;
    addListUser(data: CreateUserRequest[]): import("rxjs").Observable<import("axios").AxiosResponse<any, any>>;
    getInfo(msv: string): import("rxjs").Observable<import("axios").AxiosResponse<GetInfoRequest, any>>;
    updateInfo(msv: string, data: UpdateInfoRequest): import("rxjs").Observable<import("axios").AxiosResponse<UpdateInfoResponse, any>>;
    depositUser(msv: string, data: any): import("rxjs").Observable<import("axios").AxiosResponse<UpdateInfoResponse, any>>;
    deleteUser(msv: string): import("rxjs").Observable<import("axios").AxiosResponse<DeleteRequest, any>>;
    changePassword(data: ChangePasswordRequest): import("rxjs").Observable<import("axios").AxiosResponse<ChangePasswordResponse, any>>;
    getListUser(params: ListUserRequest): import("rxjs").Observable<import("axios").AxiosResponse<ListUserResponse, any>>;
    getAllLetter(msv: string): import("rxjs").Observable<import("axios").AxiosResponse<ListLetterResponse, any>>;
}
declare const _default: UserRepository;
export default _default;
