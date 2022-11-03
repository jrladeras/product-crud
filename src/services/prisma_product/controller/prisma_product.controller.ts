import { Products } from './../../../entities/typeorm/products';
import { UpdatePriceDto } from './../../typeorm_product/validator/price.dto';
import { CreateProductDto } from '../../typeorm_product/validator/product.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PrismaProductService } from '../services/prisma_product.service';


@Controller('prisma/product')
export class PrismaProductController{
    constructor(private productService: PrismaProductService) {}

    @Post()
    createProducts(@Body() productData: CreateProductDto) {
        return this.productService.create(productData);
    }

    @Get()
    getProducts() {
        return this.productService.getProductList();
    }

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number) {
        return this.productService.getProductById(id);
    }

    @Put(':id')
    updateProduct(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateProductDetails: UpdatePriceDto
    ) {
        return this.productService.updateProduct(id, updateProductDetails);
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productService.deleteProduct(id);
    }
}