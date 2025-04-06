import type { ICartItem } from "@/Interface/ICartItem";
import type { IItem } from "@/Interface/IItem";



export const convertToICartItem = (item: IItem, size:string, sku:string, userId: string) => {
    return {
        userId: userId,
        productId: item.id,
        name: item.name,
        price: item.price ?? 0,
        quantity: 1,
        size: size,
        image_url: item.image_url,
        sku: sku
    } as ICartItem
}