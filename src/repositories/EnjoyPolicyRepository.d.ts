import { Repository } from "@/core/Repository";
import { EnjoyPolicy, EnjoyPolicyRequest } from "@/models/EnjoyPolicy";
import { GetCodeRequest, OtpResponse, VerifyCodeRequest } from "@/models/Otp";
declare class EnjoyPolicyRepository extends Repository {
    constructor();
    create(payload: EnjoyPolicyRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
    }, any>>;
    updateLetter(id: string, data: EnjoyPolicyRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: string;
    }, any>>;
    deleteLetter(id: string): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: EnjoyPolicy;
    }, any>>;
    getCodeLetter(id: string, data: GetCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
    verifyCodeRequest(id: string, data: VerifyCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
}
declare const _default: EnjoyPolicyRepository;
export default _default;
