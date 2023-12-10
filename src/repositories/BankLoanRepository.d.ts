import { Repository } from "@/core/Repository";
import { GetCodeRequest, OtpResponse, VerifyCodeRequest } from "@/models/Otp";
import { BankLoan, BankLoanRequest } from "./../models/BankLoan";
declare class BankLoanRepository extends Repository {
    constructor();
    create(payload: BankLoanRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
    }, any>>;
    updateLetter(id: string, data: BankLoanRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: string;
    }, any>>;
    deleteLetter(id: string): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: BankLoan;
    }, any>>;
    getCodeLetter(id: string, data: GetCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
    verifyCodeRequest(id: string, data: VerifyCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
}
declare const _default: BankLoanRepository;
export default _default;
