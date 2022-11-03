import { createProduct } from '../../../validators/validators';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/helpers/connector/prisma.service';
@Injectable()
export class PrismaProductService {
    constructor(
        private prisma: PrismaService
    ) {}

    async create(productDetails: createProduct) {
        const productCreated = await this.prisma.products.create({
            data: {
                ...productDetails,
                date_created: new Date()
            },
        });

        return {created_product: productCreated, status: 200, message: "Product created successfully!"};
    }

    getProductList() {
        return this.prisma.products.findMany({
            orderBy: {
                date_created: 'desc'
            },
        })
    }

    getProductById(id) {
        return this.prisma.products.findUnique({
            where: { id }
        })
    }

    updateProduct(id: number, updateProductDetails: createProduct) {
        return this.prisma.products.update({where: {id}, 
            data: {
                ...updateProductDetails,
                date_updated: new Date()
            }})
    }

    async deleteProduct(id: number) {
        try {
            const deleted = await this.prisma.products.delete({ where: {id} })
            return {message: "Product successfully deleted!", data: deleted}
        } catch (error) {
            return {message: "No data to delete!", data: error}
        }
    }
}