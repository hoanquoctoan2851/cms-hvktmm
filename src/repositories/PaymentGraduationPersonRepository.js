import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/Otp";
import "@/models/PaymentGraduationPerson";
class PaymentGraduationPersonRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/paymentGraduationPerson`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/paymentGraduationPerson/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/paymentGraduationPerson/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/paymentGraduationPerson/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/paymentGraduationPerson/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new PaymentGraduationPersonRepository();
