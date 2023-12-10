export default function createRoutePath(input, prefix = "/") {
    const output = {};
    const index = input.Index.length > 0 ? `${prefix}${input.Index}` : "";
    for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key)) {
            const path = input[key];
            if (typeof path === "object") {
                output[key] = createRoutePath(path, index !== "/" ? index + "/" : "/");
            }
            else if (key === "Index") {
                output[key] = index.length ? index : prefix;
            }
            else {
                output[key] = index + "/" + path;
            }
        }
    }
    return output;
}
