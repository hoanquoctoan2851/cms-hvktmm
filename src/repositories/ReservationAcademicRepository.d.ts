import { Repository } from "@/core/Repository";
import { GetCodeRequest, OtpResponse, VerifyCodeRequest } from "@/models/Otp";
import { ReservationAcademic, ReservationAcademicRequest } from "./../models/ReservationAcademic";
declare class ReservationAcademicRepository extends Repository {
    constructor();
    create(payload: ReservationAcademicRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
    }, any>>;
    updateLetter(id: string, data: ReservationAcademicRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: string;
    }, any>>;
    deleteLetter(id: string): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: ReservationAcademic;
    }, any>>;
    getCodeLetter(id: string, data: GetCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
    verifyCodeRequest(id: string, data: VerifyCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
}
declare const _default: ReservationAcademicRepository;
export default _default;
