import { Repository } from "@/core/Repository";
import { GetCodeRequest, OtpResponse, VerifyCodeRequest } from "@/models/Otp";
import { CancelCourse, CancelCourseRequest } from "./../models/CancelCourse";
declare class CancelCourseRepository extends Repository {
    constructor();
    create(payload: CancelCourseRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
    }, any>>;
    updateLetter(id: string, data: CancelCourseRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: string;
    }, any>>;
    deleteLetter(id: string): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: CancelCourse;
    }, any>>;
    getCodeLetter(id: string, data: GetCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
    verifyCodeRequest(id: string, data: VerifyCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
}
declare const _default: CancelCourseRepository;
export default _default;
