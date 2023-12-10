interface AuthStoreState {
    accessToken: string;
    refreshToken: string;
    expiresIn?: number;
    user?: {
        username: string;
        type: "user" | "admin" | "teacher" | null;
        id: string;
        userId: string;
        name?: string;
        number?: string;
        balance?: number;
    };
}
export declare const useAuth: import("pinia").StoreDefinition<"auth", AuthStoreState, {
    isLoggedIn(state: {
        accessToken: string;
        refreshToken: string;
        expiresIn?: number | undefined;
        user?: {
            username: string;
            type: "user" | "admin" | "teacher" | null;
            id: string;
            userId: string;
            name?: string | undefined;
            number?: string | undefined;
            balance?: number | undefined;
        } | undefined;
    } & {}): boolean;
}, {
    login(data: AuthStoreState): void;
    logout(): void;
    getInfoAdmin(): void;
}>;
export {};
