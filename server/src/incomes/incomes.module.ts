import { Module } from '@nestjs/common';
import { IncomesController } from './incomes.controller';
import { IncomesService } from './incomes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incomes } from './incomes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Incomes])],
  controllers: [IncomesController],
  providers: [IncomesService],
})
export class IncomesModule {}
