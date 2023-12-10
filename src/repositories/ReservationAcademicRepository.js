import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/Otp";
import "./../models/ReservationAcademic";
class ReservationAcademicRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    create(payload) {
        return this.request({
            url: `/reservationAcademic`,
            method: "post",
            data: payload,
        });
    }
    updateLetter(id, data) {
        return this.request({
            method: "PUT",
            url: `/reservationAcademic/${id}`,
            data: data,
        });
    }
    deleteLetter(id) {
        return this.request({
            method: "Delete",
            url: `/reservationAcademic/${id}`,
        });
    }
    getCodeLetter(id, data) {
        return this.request({
            method: "POST",
            url: `/reservationAcademic/getCode/${id}`,
            data: data,
        });
    }
    verifyCodeRequest(id, data) {
        return this.request({
            method: "POST",
            url: `/reservationAcademic/verifyCodeLetter/${id}`,
            data: data,
        });
    }
}
export default new ReservationAcademicRepository();
