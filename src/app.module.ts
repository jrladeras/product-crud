import { IndexServiceModule } from './services/index.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    IndexServiceModule, 
    ],
})
export class AppModule {}