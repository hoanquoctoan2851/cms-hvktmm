import {StatusLetter} from "@/models/Letter";
import {GetInfoRequest, ListLetterResponse} from "@/models/User";
import {Repository} from "@/core/Repository/index";
import env from "@/core/env/index";


class AdminRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    getAllLetterApply(
        payload: { status?: StatusLetter; name?: string; msv?: string }
    ) {
        return this.request<ListLetterResponse>({
            url: `/admin/allLetter`,
            method: "get",
            params: payload,
        });
    }
  getInfoAdmin(id: string) {
    return this.request<any>({
      url: `/admin/${id}`,
      method: "get",
      showLoading: true,
    });
  }

}

export default new AdminRepository();
