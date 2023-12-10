import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/ChangeCourse";
import "@/models/Otp";
class ChangeCourseRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/changeCourse`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/changeCourse/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/changeCourse/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/changeCourse/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/changeCourse/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new ChangeCourseRepository();
