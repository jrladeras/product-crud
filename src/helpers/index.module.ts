import { Module } from '@nestjs/common';
import { ConnectorModule, PrismaModule } from './connector/connector.module';

@Module({
  imports: [ConnectorModule, PrismaModule]
})
export class HelperModule {}
