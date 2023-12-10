import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/Otp";
import "./../models/BankLoan";
class BankLoanRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/bankLoan`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/bankLoan/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/bankLoan/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/bankLoan/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/bankLoan/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new BankLoanRepository();
