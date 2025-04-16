import type { IRouter } from '@/Interface/IRouter';

export interface IItem {
    id: string,
    name: string,
    image_url?: string,
    price?: number,
    summary?: string,
    describe?: string,
    label?: string,
    router?: IRouter
    Product_Variants?: [],
    created_at?: string
}