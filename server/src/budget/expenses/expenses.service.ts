import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseDto } from './dtos/create-expense.dto';
import { Expense } from './expenses.entity';

@Injectable()
export class ExpensesService {
  constructor(@InjectRepository(Expense) private repo: Repository<Expense>) {}

  getExpenses() {
    const totalAmount = this.repo
      .createQueryBuilder('expense')
      .select('SUM(expense.amount)', 'totalAmount')
      .where('expense.date >= :startDate', {
        startDate: '2023-08-24T22:00:00.000Z',
      })
      .andWhere('expense.date <= :endDate', {
        endDate: '2023-08-25T22:00:00.000Z',
      })
      .getRawOne();

    const groupByCategories = this.repo
      .createQueryBuilder('expense')
      .select('expense.expense_category', 'expenseCategory')
      .addSelect('SUM(expense.amount)', 'totalAmount')
      .where('expense.date >= :startDate', {
        startDate: '2023-08-24T22:00:00.000Z',
      })
      .andWhere('expense.date <= :endDate', {
        endDate: '2023-08-26T22:00:00.000Z',
      })
      .groupBy('expense.expense_category')
      .getRawMany();

    const allExpenses = this.repo.find();

    return Promise.all([allExpenses, totalAmount, groupByCategories]).then(
      (values) => {
        return {
          expenses: values[0],
          ...values[1],
          groupByCategories: values[2],
        };
      },
    );
  }

  getExpenseById(id: string) {
    return this.repo.findOneBy({ id });
  }

  addExpense(createExpenseDto: CreateExpenseDto) {
    const newExpense = this.repo.create({ ...createExpenseDto });

    return this.repo.save(newExpense);
  }
}
