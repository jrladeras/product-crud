import { Products } from './../../entities/typeorm/products';
import { Prices } from './../../entities/typeorm/prices';
import { ConfigModule } from '@nestjs/config';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaService } from './prisma.service';

// TypeOrmM
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'P@$$w0rd',
      database: 'product_master',
      entities: [Products, Prices],
      synchronize: false
    }),
  ],
})
export class ConnectorModule {}


//Prisma
@Global()
@Module({
  imports: [ConfigModule.forRoot({isGlobal: true})],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
