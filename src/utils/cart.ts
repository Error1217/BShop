import type { ICartItem } from "@/Interface/ICartItem";
import type { IItem } from "@/Interface/IItem";



export const convertToICartItem = (item: IItem, userId: string) => {
    return {
        userId: userId,
        productId: item.id,
        name: item.name,
        price: item.price ?? 0,
        quantity: 1,
    } as ICartItem
}