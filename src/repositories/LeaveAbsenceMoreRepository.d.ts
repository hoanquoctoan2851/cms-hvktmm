import { Repository } from "@/core/Repository";
import { LeaveAbsenceMore, LeaveAbsenceMoreRequest } from "@/models/LeaveAbsenceMore";
import { GetCodeRequest, OtpResponse, VerifyCodeRequest } from "@/models/Otp";
declare class LeaveAbsenceMoreRepository extends Repository {
    constructor();
    create(payload: LeaveAbsenceMoreRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
    }, any>>;
    updateLetter(id: string, data: LeaveAbsenceMoreRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: string;
    }, any>>;
    deleteLetter(id: string): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: LeaveAbsenceMore;
    }, any>>;
    getCodeLetter(id: string, data: GetCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
    verifyCodeRequest(id: string, data: VerifyCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
}
declare const _default: LeaveAbsenceMoreRepository;
export default _default;
