import type { IRouter } from '@/Interface/IRouter';

export interface IItem {
    id: number,
    name: string,
    image_url?: string,
    price?: number,
    colors?: string,
    size?: string
    summary?: string
    describe?: string,
    label?: string
    router?: IRouter
}