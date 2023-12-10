import { message } from "ant-design-vue";
import "ant-design-vue/lib/message";
export default function useMessage() {
    const $messageKey = Symbol("messageKey");
    function loading(content, option) {
        return message.loading({
            key: $messageKey.description,
            content,
            ...option,
        });
    }
    function success(content, option) {
        return message.success({
            key: $messageKey.description,
            content,
            ...option,
        });
    }
    function info(content, option) {
        return message.info({
            key: $messageKey.description,
            content,
            ...option,
        });
    }
    function warning(content, option) {
        return message.warning({
            key: $messageKey.description,
            content,
            ...option,
        });
    }
    function error(content, option) {
        return message.error({
            key: $messageKey.description,
            content,
            ...option,
        });
    }
    return {
        loading,
        success,
        info,
        warning,
        error,
    };
}
