import { Prices } from './../../../entities/typeorm/prices';
import { CreatePriceDto } from './../validator/price.dto';
import { PriceService } from './../services/price.service';
import { Products } from './../../../entities/typeorm/products';
import { ProductService } from '../services/product.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateProductDto, UpdateProductDto } from '../validator/product.dto';


@Controller('product')
export class ProductController{
    constructor(
        private productService: ProductService,
        private priceService: PriceService
        ) {}

    @Post()
    createProducts(@Body() productDetails: CreateProductDto): Promise<Products> {
        return this.productService.createProducts(productDetails);
    }

    @Get()
    getProductList(): Promise<Products[]> {
        return this.productService.getProductList();
    }

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number): Promise<Products> {
        return this.productService.getProductById(id);
    }

    @Put(':id')
    updateProduct(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateProductDetails: UpdateProductDto
    ) {
        return this.productService.updateProduct(id, updateProductDetails);
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productService.deleteProduct(id);
    }

    @Post(':id/price')
    createPrice(@Param('id', ParseIntPipe) id: number, @Body() priceDetails: CreatePriceDto): Promise<Prices>  {
        return this.priceService.createPrice(id, priceDetails);
    }
}