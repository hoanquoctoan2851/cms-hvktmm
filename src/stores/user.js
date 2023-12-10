import UserRepository from "@/repositories/UserRepository";
import { defineStore } from "pinia";
import "./../models/User";
export const useUser = defineStore({
    id: "user",
    state: () => ({
        user: {
            _id: "",
            name: "",
            birthDay: undefined,
            class: "",
            gender: "",
            majors: undefined,
            msv: "",
            balance: null
        },
    }),
    actions: {
        getInfoAccount(msv) {
            return UserRepository.getInfo(msv).subscribe(({ data }) => {
                this.user = data.data;
            });
        },
    },
    persist: {
        enabled: true,
    },
});
