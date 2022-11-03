import { createPrice } from './../../../validators/validators';
import { Prices } from './../../../entities/typeorm/prices';
import { createProduct } from '../../../validators/validators';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class PriceService{
    constructor(@InjectRepository(Prices) private priceRepository: Repository<Prices>) {}

    createPrice(id: number, productDetails: createPrice) {
        const newProduct = this.priceRepository.create({
            ...productDetails, 
            product_id: id,
            date_created: new Date()});

            return this.priceRepository.save(newProduct)
    }

    updatePrice(id: number, updateProductDetails: createProduct) {
        return this.priceRepository.update({ id }, 
            {
                ...updateProductDetails,
                date_updated: new Date()
            })
    }

    deletePrice(id: number) {
        return this.priceRepository.delete({ id })
    }
}