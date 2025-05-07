import { createApp } from "vue";
import BackendAddProduct from "@/components/BackendAddProduct.vue";
/*

顯示提示框
*/

export function showBackendAddProduct() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const app = createApp(BackendAddProduct,{
        onClose: ()=>{
            app.unmount();
            document.body.removeChild(container);
        }
    });
    
    app.mount(container);
    
}

