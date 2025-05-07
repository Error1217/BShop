import { createApp } from "vue";
import Toast from "@/components/Toast.vue";

/*

顯示提示框
*/

export function showToast(message: string, duration: number | null = 2000) {

    function _close() {
        app.unmount();
        document.body.removeChild(container);
    }

    const container = document.createElement('div');
    document.body.appendChild(container);

    const app = createApp(Toast, {
        msg: message
    });
    app.mount(container);

    if (duration !== null) {
        setTimeout(_close, duration);
    }

    return _close
}

