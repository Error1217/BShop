import { createApp } from "vue";
import Login from "@/components/Login.vue";

/*

顯示提示框
*/

export function showLogin() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const app = createApp(Login,{
        onClose: ()=>{
            app.unmount();
            document.body.removeChild(container);
        }
    });
    
    app.mount(container);
    
}

