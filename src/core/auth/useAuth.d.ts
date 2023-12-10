import { Account, LoginRequest } from "./../../models/Auth";
export declare const authInjectKey: unique symbol;
export default function useAuth(): {
    account: Account | undefined;
    token: string | undefined;
    isLoggedIn: boolean;
    login: (value: LoginRequest) => void;
    logout: () => void;
};
