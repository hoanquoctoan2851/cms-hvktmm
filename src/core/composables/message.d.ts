import { MessageArgsProps } from "ant-design-vue/lib/message";
export default function useMessage(): {
    loading: (content: string, option?: Omit<MessageArgsProps, "content" | "key"> | undefined) => import("ant-design-vue/es/message").MessageType;
    success: (content: string, option?: Omit<MessageArgsProps, "content" | "key"> | undefined) => import("ant-design-vue/es/message").MessageType;
    info: (content: string, option?: Omit<MessageArgsProps, "content" | "key"> | undefined) => import("ant-design-vue/es/message").MessageType;
    warning: (content: string, option?: Omit<MessageArgsProps, "content" | "key"> | undefined) => import("ant-design-vue/es/message").MessageType;
    error: (content: string, option?: Omit<MessageArgsProps, "content" | "key"> | undefined) => import("ant-design-vue/es/message").MessageType;
};
