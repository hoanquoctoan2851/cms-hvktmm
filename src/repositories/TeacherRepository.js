import env from "@/core/env";
import { Repository } from "@/core/Repository";
import "@/models/Teacher";
import "@/models/User";
import "./../models/Letter";
class TeacherRepository extends Repository {
    constructor() {
        super(env.API_URL);
    }
    getInfo(id) {
        return this.request({
            url: `/teachers/${id}`,
            method: "get",
        });
    }
    addTeacher(data) {
        return this.request({
            url: "/teachers",
            method: "POST",
            data,
        });
    }
    addListTeacher(data) {
        return this.request({
            url: "/create-list-teachers",
            method: "POST",
            data,
        });
    }
    updateInfo(id, data) {
        return this.request({
            url: `/teachers/${id}`,
            method: "put",
            showLoading: true,
            data: data,
        });
    }
    changePassword(data) {
        return this.request({
            url: `/teachers/changePassword`,
            method: "put",
            showLoading: true,
            data: data,
        });
    }
    getListTeacher(params) {
        return this.request({
            url: `/teachers`,
            method: "get",
            params: params,
        });
    }
    deleteTeacher(id) {
        return this.request({
            url: `/teachers/${id}`,
            method: "delete",
        });
    }
    getAllLetterApply(id, payload) {
        return this.request({
            url: `/teachers/${id}/allLetter`,
            method: "get",
            params: payload,
        });
    }
}
export default new TeacherRepository();
