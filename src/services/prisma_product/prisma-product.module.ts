import { PrismaProductService } from './services/prisma_product.service';
import { PrismaProductController } from './controller/prisma_product.controller';
import {Module} from '@nestjs/common'

@Module({
    controllers: [PrismaProductController],
    providers: [PrismaProductService]
})
export class PrismaProductModule{}