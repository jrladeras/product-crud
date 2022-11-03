import { Products } from './../../../entities/typeorm/products';
import { createProduct } from '../../../validators/validators';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class ProductService{
    constructor(@InjectRepository(Products) private productRepository: Repository<Products>) {}

    createProducts(productDetails: createProduct) {
        const newProduct = this.productRepository.create({
            ...productDetails, 
            date_created: new Date()});

            return this.productRepository.save(newProduct)
    }

    getProductList() {
        return this.productRepository.find()
    }

    getProductById(id) {
        return this.productRepository.findOneBy({ id })
    }

    updateProduct(id: number, updateProductDetails: createProduct) {
        return this.productRepository.update({ id }, 
            {
                ...updateProductDetails,
                date_updated: new Date()
            })
    }

    deleteProduct(id: number) {
        return this.productRepository.delete({ id })
    }
}