import jwtDecode from "jwt-decode";
import { defineStore } from "pinia";
import "axios";
export const useAuth = defineStore({
    id: "auth",
    state: () => ({
        accessToken: "",
        refreshToken: "",
        expiresIn: 0,
        user: {
            username: "",
            type: null,
            id: "",
            userId: "",
            balance: 0
        },
    }),
    getters: {
        isLoggedIn(state) {
            return !!state.accessToken;
        },
    },
    actions: {
        login(data) {
            this.accessToken = data.accessToken;
            this.refreshToken = data.refreshToken;
            if (data.accessToken) {
                const jwtData = jwtDecode(data.accessToken);
                this.user = {
                    username: jwtData.username,
                    name: jwtData.name,
                    type: jwtData.type,
                    id: jwtData._id,
                    userId: jwtData.userId,
                    balance: jwtData.balance
                };
                this.expiresIn = jwtData.exp;
            }
        },
        logout() {
            this.accessToken = "";
            this.refreshToken = "";
            this.expiresIn = 0;
            this.user = undefined;
        },
        getInfoAdmin() {
        }
    },
    persist: {
        enabled: true,
    },
});
