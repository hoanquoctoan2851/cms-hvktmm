import "@/models/Letter";
import "@/models/User";
import { Repository } from "@/core/Repository/index";
import env from "@/core/env/index";
class AdminRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    getAllLetterApply(payload) {
        return this.request({
            url: `/admin/allLetter`,
            method: "get",
            params: payload,
        });
    }
    getInfoAdmin(id) {
        return this.request({
            url: `/admin/${id}`,
            method: "get",
            showLoading: true,
        });
    }
}
export default new AdminRepository();
