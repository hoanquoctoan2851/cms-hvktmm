import "@/repositories/UserRepository";
import { defineStore } from "pinia";
import "./../models/User";
export const useAppStore = defineStore({
    id: "app",
    state: () => ({
        signature: ''
    }),
    actions: {
        setSignature(url) {
            this.signature = url;
        },
    },
});
