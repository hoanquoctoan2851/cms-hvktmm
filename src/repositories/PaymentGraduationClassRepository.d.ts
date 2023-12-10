import { Repository } from "@/core/Repository";
import { GetCodeRequest, OtpResponse, VerifyCodeRequest } from "@/models/Otp";
import { PaymentGraduationClass, PaymentGraduationClassRequest } from "@/models/PaymentGraduationClass";
declare class PaymentGraduationClassRepository extends Repository {
    constructor();
    create(payload: PaymentGraduationClassRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
    }, any>>;
    updateLetter(id: string, data: PaymentGraduationClassRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: string;
    }, any>>;
    deleteLetter(id: string): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: PaymentGraduationClass;
    }, any>>;
    getCodeLetter(id: string, data: GetCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
    verifyCodeRequest(id: string, data: VerifyCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
}
declare const _default: PaymentGraduationClassRepository;
export default _default;
