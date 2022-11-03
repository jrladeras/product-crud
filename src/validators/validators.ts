import { Decimal } from '@prisma/client/runtime';
import { Prices } from './../entities/typeorm/prices';
export type createProduct = {
    name: string,
    description: string,
}

export type updateProduct = {
    name: string,
    description: string,
    status: boolean
}

export type createPrice = {
    name: string,
    description: string,
    price: number,
    compare_price: number,
}