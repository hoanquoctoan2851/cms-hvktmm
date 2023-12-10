class TokenManager {
    getToken(type) {
        return localStorage.getItem(type) || "";
    }
    setToken(type, token) {
        return localStorage.setItem(type, token);
    }
}
export default new TokenManager();
