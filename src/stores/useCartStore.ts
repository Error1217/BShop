import type { ICartItem } from "@/Interface/ICartItem";
import type { IItem } from "@/Interface/IItem";
import { convertToICartItem } from "@/utils/cart";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => {
        return {
            items: [] as ICartItem[],
        };
    },

    getters: {

        totalItems: (state) => {
            return state.items.length;
        },

        totalPrice: (state) => {
            return state.items.reduce((sum: number, item: ICartItem) => {
                return sum + (item.price ?? 0)
            }, 0);
        }
    },

    actions: {

        addItem(item: IItem, userId: string) {
            const isExistCartItem = this.items.find((_item) => { return _item.productId === item.id });

            if (isExistCartItem) {
                isExistCartItem.quantity++;
            } else {
                const cartItem = convertToICartItem(item, userId);

                this.items.push(cartItem);
            }

        },

        removeItem(item: ICartItem) {
            this.items = this.items.filter((_item) => { _item.productId === item.productId });
        },

        clearItem() {
            this.items = [] as ICartItem[];
        }


    }
})