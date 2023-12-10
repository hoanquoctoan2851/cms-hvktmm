export declare type InputRoutePath = {
    readonly Index: string;
    readonly [key: string]: string | InputRoutePath;
};
declare type JoinPath<Prefix extends string, A extends string, B extends string> = Prefix extends "" ? `${A}${B}` : `${Prefix}${A}${B}`;
declare type RoutePathOutput<Input extends InputRoutePath, Prefix extends string = "/", K extends keyof Input = keyof Input> = {
    [P in K]: P extends "Index" ? JoinPath<"", Prefix, Input["Index"]> : Input[P] extends InputRoutePath ? RoutePathOutput<Input[P], JoinPath<"", Prefix, Input["Index"] extends "" ? "" : `${Input["Index"]}/`>> : Input[P] extends string ? JoinPath<Prefix, Input["Index"] extends "" ? "" : `${Input["Index"]}/`, Input[P]> : "";
};
export default function createRoutePath<Input extends InputRoutePath>(input: Input, prefix?: string): RoutePathOutput<Input>;
export {};
