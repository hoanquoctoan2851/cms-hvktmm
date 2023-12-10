import UserRepository from "@/repositories/UserRepository";
import { defineStore } from "pinia";
import { InfoResponse as User } from "./../models/User";

export interface UserStoreState {
  user: Omit<User, "__v" | "updatedAt" | "createdAt">;
}

export const useAppStore = defineStore({
  id: "app",
  state: (): any => ({
    signature: ''
  }),

  actions: {
    setSignature(url: string) {
     this.signature = url
    },
  },

});
