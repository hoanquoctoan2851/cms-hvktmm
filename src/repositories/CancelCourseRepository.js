import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/Otp";
import "./../models/CancelCourse";
class CancelCourseRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/cancelCourse`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/cancelCourse/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/cancelCourse/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/cancelCourse/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/cancelCourse/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new CancelCourseRepository();
