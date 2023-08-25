import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomesController } from 'src/budget/incomes/incomes.controller';
import { Income } from 'src/budget/incomes/incomes.entity';
import { IncomesService } from './incomes/incomes.service';
import { Expense } from './expenses/expenses.entity';
import { ExpensesController } from './expenses/expenses.controller';
import { ExpensesService } from './expenses/expenses.service';
import { Saving } from './savings/saving.entity';
import { SavingsController } from './savings/savings.controller';
import { SavingService } from './savings/savings.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Income]),
    TypeOrmModule.forFeature([Expense]),
    TypeOrmModule.forFeature([Saving]),
  ],
  controllers: [IncomesController, ExpensesController, SavingsController],
  providers: [IncomesService, ExpensesService, SavingService],
})
export class BudgetModule {}
