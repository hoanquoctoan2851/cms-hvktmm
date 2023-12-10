import { StatusLetter } from "@/models/Letter";
import { ListLetterResponse } from "@/models/User";
import { Repository } from "@/core/Repository/index";
declare class AdminRepository extends Repository {
    constructor();
    getAllLetterApply(payload: {
        status?: StatusLetter;
        name?: string;
        msv?: string;
    }): import("rxjs").Observable<import("axios").AxiosResponse<ListLetterResponse, any>>;
    getInfoAdmin(id: string): import("rxjs").Observable<import("axios").AxiosResponse<any, any>>;
}
declare const _default: AdminRepository;
export default _default;
