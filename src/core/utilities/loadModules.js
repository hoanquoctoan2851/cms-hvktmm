import { sortBy } from "lodash";
export default function loadModules() {
    return new Promise((resolve, reject) => {
        try {
            const modules = import.meta.glob("/src/modules/**/module.ts", {
                eager: true,
            });
            const appModules = [];
            for (const modulePath in modules) {
                if (Object.prototype.hasOwnProperty.call(modules, modulePath)) {
                    const module = modules[modulePath];
                    if (!module.default) {
                        throw Error(`Module in path ${modulePath} has no export default`);
                    }
                    appModules.push(module.default);
                }
            }
            resolve(sortBy(appModules, "order"));
        }
        catch (error) {
            reject(error);
        }
    });
}
