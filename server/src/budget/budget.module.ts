import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomesController } from 'src/budget/incomes/incomes.controller';
import { Income } from 'src/budget/incomes/incomes.entity';
import { IncomesService } from './incomes/incomes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  controllers: [IncomesController],
  providers: [IncomesService],
})
export class BudgetModule {}
