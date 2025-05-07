
/**
 * 已棄用
 */

import { defineStore } from "pinia";


const windowMap = {
    modal: "modalVisible",
    loginWindow: "loginWindowVisible",
    addProductWindow: "addProductWindowVisible"
}

export const useWindowStore = defineStore("window", {
    state: () => {
        return{
            modalVisible: false,
            loginWindowVisible: false,
            addProductWindowVisible: false,
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