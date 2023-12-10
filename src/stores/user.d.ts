import { InfoResponse as User } from "./../models/User";
export interface UserStoreState {
    user: Omit<User, "__v" | "updatedAt" | "createdAt">;
}
export declare const useUser: import("pinia").StoreDefinition<"user", UserStoreState, {}, {
    getInfoAccount(msv: string): import("rxjs").Subscription;
}>;
