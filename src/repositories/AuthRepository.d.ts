import { Repository } from "@/core/Repository";
import { LoginRequest, LoginResponse, RefreshTokenResponse } from "@/models/Auth";
declare class AuthRepository extends Repository {
    constructor();
    login(payload: LoginRequest): import("rxjs").Observable<import("axios").AxiosResponse<LoginResponse, any>>;
    refreshToken(refreshToken: string): import("rxjs").Observable<import("axios").AxiosResponse<RefreshTokenResponse, any>>;
    logout(): import("rxjs").Observable<import("axios").AxiosResponse<any, any>>;
}
declare const _default: AuthRepository;
export default _default;
