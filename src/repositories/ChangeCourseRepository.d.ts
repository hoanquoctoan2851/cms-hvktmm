import { Repository } from "@/core/Repository";
import { ChangeCourse, ChangeCourseRequest } from "@/models/ChangeCourse";
import { GetCodeRequest, OtpResponse, VerifyCodeRequest } from "@/models/Otp";
declare class ChangeCourseRepository extends Repository {
    constructor();
    create(payload: ChangeCourseRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
    }, any>>;
    updateLetter(id: string, data: ChangeCourseRequest): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: string;
    }, any>>;
    deleteLetter(id: string): import("rxjs").Observable<import("axios").AxiosResponse<{
        success: boolean;
        data: ChangeCourse;
    }, any>>;
    getCodeLetter(id: string, data: GetCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
    verifyCodeRequest(id: string, data: VerifyCodeRequest): import("rxjs").Observable<import("axios").AxiosResponse<OtpResponse, any>>;
}
declare const _default: ChangeCourseRepository;
export default _default;
