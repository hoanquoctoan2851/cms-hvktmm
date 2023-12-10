import { InfoResponse as User } from "./../models/User";
export interface UserStoreState {
    user: Omit<User, "__v" | "updatedAt" | "createdAt">;
}
export declare const useAppStore: import("pinia").StoreDefinition<"app", any, {}, {
    setSignature(url: string): void;
}>;
