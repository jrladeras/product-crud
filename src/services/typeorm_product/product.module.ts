import { PriceService } from './services/price.service';
import { Prices } from './../../entities/typeorm/prices';
import { Products } from './../../entities/typeorm/products';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.contoller';
import {Module} from '@nestjs/common'

@Module({
    imports: [TypeOrmModule.forFeature([Products, Prices])],
    controllers: [ProductController],
    providers: [ProductService, PriceService]
})
export class ProductModule{}