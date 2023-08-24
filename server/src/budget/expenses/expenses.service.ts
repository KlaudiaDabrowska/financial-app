import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseDto } from './dtos/create-expense.dto';
import { Expense } from './expenses.entity';

@Injectable()
export class ExpensesService {
  constructor(@InjectRepository(Expense) private repo: Repository<Expense>) {}

  getExpenses() {
    return this.repo.find();
  }

  getExpenseById(id: number) {
    return this.repo.findOneBy({ id });
  }

  addExpense(createExpenseDto: CreateExpenseDto) {
    const newExpense = this.repo.create({ ...createExpenseDto });

    return this.repo.save(newExpense);
  }
}
