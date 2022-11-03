import { HelperModule } from './../helpers/index.module';
import { Module } from '@nestjs/common';
import { PrismaProductModule } from './prisma_product/prisma-product.module';
import { ProductModule } from './typeorm_product/product.module';

@Module({
  imports: [ProductModule, PrismaProductModule, HelperModule],
})
export class IndexServiceModule {}