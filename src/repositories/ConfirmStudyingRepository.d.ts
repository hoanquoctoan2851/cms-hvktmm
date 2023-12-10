import { Repository } from "@/core/Repository";
import { ConfirmStudying, ConfirmStudyingRequest } from "@/models/ConfirmStudying";
import { GetCodeRequest, OtpResponse, VerifyCodeRequest } from "@/models/Otp";
declare class ConfirmStudyingRepository extends Repository {
    constructor();
    create(payload: ConfirmStudyingRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
    }, any>>;
    updateLetter(id: string, data: ConfirmStudyingRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: string;
    }, any>>;
    deleteLetter(id: string): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: ConfirmStudying;
    }, any>>;
    getCodeLetter(id: string, data: GetCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
    verifyCodeRequest(id: string, data: VerifyCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
}
declare const _default: ConfirmStudyingRepository;
export default _default;
