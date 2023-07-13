import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomesModule } from './incomes/incomes.module';

@Module({
  imports: [IncomesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
