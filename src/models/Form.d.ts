import { NamePath } from "ant-design-vue/es/form/interface";
export declare type FormNamePath = string | number | (string | number)[];
export interface FormInjectedValues {
    values: any;
    getFieldValue(name: FormNamePath): any;
    setFieldValue(name: FormNamePath, value: any): void;
    validate(name?: string | NamePath[]): void;
    submit: () => void;
    validateTrigger?: string | string[];
}
export declare const $formInjectKey: unique symbol;
export interface FormExposed {
    values: any;
    getFieldValue(name: FormNamePath): any;
    setFieldValue(name: FormNamePath, value: any): void;
    submit: () => void;
    reset: () => void;
    validate: () => Promise<any>;
}
export interface Options {
    label: string;
    value: string;
    path?: string;
}
