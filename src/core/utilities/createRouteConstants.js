import createRoutePath from "@/core/utilities/createRoutePath";
import { capitalize } from "lodash";
function createRoutePathName(name, input, prefix = "") {
    const output = {};
    for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key)) {
            const path = input[key];
            prefix = prefix ? prefix : capitalize(name);
            if (typeof path === "string") {
                output[key] = `${prefix}.${capitalize(key)}`;
            }
            else {
                output[key] = createRoutePathName(name, path, `${prefix}.${capitalize(key)}`);
            }
        }
    }
    return output;
}
export default function createRouteConstants(name, input) {
    return {
        Paths: createRoutePath(input),
        Names: createRoutePathName(name, input),
    };
}
