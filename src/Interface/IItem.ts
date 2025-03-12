import type { IRouter } from '@/Interface/IRouter';

export interface IItem {
    id: number,
    name: string,
    img?: string,
    price?: number,
    summary?: string
    describe?: string,
    label?: string
    router?: IRouter
}