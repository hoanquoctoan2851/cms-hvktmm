const env = {
    APP_NAME: "",
    DEFAULT_PAGE_SIZE: 10,
    API_URL: "http://localhost",
    API_VERSION: 1,
};
for (const key in import.meta.env) {
    if (key.indexOf("VITE_") === 0) {
        const newKey = key.replace("VITE_", "");
        if (!import.meta.env[newKey]) {
            env[newKey] = import.meta.env[key];
        }
        continue;
    }
    env[key] = import.meta.env[key];
}
export default env;
