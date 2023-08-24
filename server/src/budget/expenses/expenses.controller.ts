import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateExpenseDto } from './dtos/create-expense.dto';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Get()
  getIncomes() {
    return this.expensesService.getExpenses();
  }

  @Get('/:id')
  getIncomeById(@Param('id') id: string) {
    return this.expensesService.getExpenseById(+id);
  }

  @Post()
  addIncome(
    @Body()
    body: CreateExpenseDto,
  ) {
    return this.expensesService.addExpense(body);
  }
}
