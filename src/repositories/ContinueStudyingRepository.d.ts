import { Repository } from "@/core/Repository";
import { GetCodeRequest, OtpResponse, VerifyCodeRequest } from "@/models/Otp";
import { ContinueStudying, ContinueStudyingRequest } from "./../models/ContinueStudying";
declare class ConfirmStudyingRepository extends Repository {
    constructor();
    create(payload: ContinueStudyingRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
    }, any>>;
    updateLetter(id: string, data: ContinueStudyingRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: string;
    }, any>>;
    deleteLetter(id: string): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: ContinueStudying;
    }, any>>;
    getCodeLetter(id: string, data: GetCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
    verifyCodeRequest(id: string, data: VerifyCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
}
declare const _default: ConfirmStudyingRepository;
export default _default;
