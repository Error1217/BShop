import type { IRouter } from '@/Interface/IRouter';

export interface IItem {
    id: number,
    name: string,
    image_url?: string,
    price?: number,
    summary?: string
    describe?: string,
    label?: string
    router?: IRouter
}