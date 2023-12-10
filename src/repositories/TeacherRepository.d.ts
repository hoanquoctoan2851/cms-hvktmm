import { Repository } from "@/core/Repository";
import { ChangePasswordRequest, ChangePasswordResponse, ListTeacherRequest, ListTeacherResponse, UpdateInfoRequest, UpdateInfoResponse } from "@/models/Teacher";
import { ListLetterResponse } from "@/models/User";
import { StatusLetter } from "./../models/Letter";
declare class TeacherRepository extends Repository {
    constructor();
    getInfo(id: string): import("rxjs").Observable<import("axios").AxiosResponse<UpdateInfoResponse, any>>;
    addTeacher(data: UpdateInfoRequest | UpdateInfoRequest[]): import("rxjs").Observable<import("axios").AxiosResponse<UpdateInfoResponse, any>>;
    addListTeacher(data: UpdateInfoRequest[]): import("rxjs").Observable<import("axios").AxiosResponse<any, any>>;
    updateInfo(id: string, data: UpdateInfoRequest): import("rxjs").Observable<import("axios").AxiosResponse<UpdateInfoResponse, any>>;
    changePassword(data: ChangePasswordRequest): import("rxjs").Observable<import("axios").AxiosResponse<ChangePasswordResponse, any>>;
    getListTeacher(params: ListTeacherRequest): import("rxjs").Observable<import("axios").AxiosResponse<ListTeacherResponse, any>>;
    deleteTeacher(id: string): import("rxjs").Observable<import("axios").AxiosResponse<any, any>>;
    getAllLetterApply(id: string, payload: {
        status?: StatusLetter;
        name?: string;
        msv?: string;
    }): import("rxjs").Observable<import("axios").AxiosResponse<ListLetterResponse, any>>;
}
declare const _default: TeacherRepository;
export default _default;
