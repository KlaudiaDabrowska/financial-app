import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomesController } from 'src/budget/incomes/incomes.controller';
import { Income } from 'src/budget/incomes/incomes.entity';
import { IncomesService } from './incomes/incomes.service';
import { Expense } from './expenses/expenses.entity';
import { ExpensesController } from './expenses/expenses.controller';
import { ExpensesService } from './expenses/expenses.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Income]),
    TypeOrmModule.forFeature([Expense]),
  ],
  controllers: [IncomesController, ExpensesController],
  providers: [IncomesService, ExpensesService],
})
export class BudgetModule {}
