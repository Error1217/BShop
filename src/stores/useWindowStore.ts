import { defineStore } from "pinia";


const windowMap = {
    modal: "modalVisible",
    loginWindow: "loginWindowVisible"
}

export const useWindowStore = defineStore("window", {
    state: () => {
        return{
            modalVisible: false,
            loginWindowVisible: false,
        } as { [key: string]: boolean }
    } ,
    actions: {
        
        openWindow(windowId: string & keyof typeof windowMap) {
            
            const windowKey = windowMap[windowId];

            if (windowKey) {
                this[windowKey] = true;
            }

        },
        closeWindow(windowId: string & keyof typeof windowMap) {

            const windowKey = windowMap[windowId];

            if (windowKey) {
                this[windowKey] = false;
            }

        }
    }
});