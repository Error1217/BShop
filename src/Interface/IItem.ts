import type { IRouter } from '@/Interface/IRouter';
import type { UUID } from 'crypto';

export interface IItem {
    id: UUID,
    name: string,
    image_url?: string,
    size?: string,
    sku?: string,
    stock?: number
    price?: number,
    summary?: string,
    describe?: string,
    label?: string,
    router?: IRouter
    Product_Variants?: [],
    created_at?: string
}