import { useUserStore } from "@/stores/useUserStore";
import type { Router } from "vue-router";

export default function setupGuards(router: Router){
    router.beforeEach(async (to, from) => {
        const userStore = useUserStore();
        const userRole = userStore.role;

        if (to.meta.requiresAuth) {
            const allowedRoles = to.meta.roles as String[] | undefined

            if (allowedRoles) {
                
                if(allowedRoles.includes(userRole as String)){
                    return true;
                }
                else{
                    console.log("無權限")
                    return false;
                    
                }
            }

            if(userRole){
                return true;
            }
            else{
                console.log("未登入")
                return false;
            }

        }

        return true

    });
}