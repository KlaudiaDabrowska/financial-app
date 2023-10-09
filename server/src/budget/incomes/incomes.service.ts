import { Injectable } from '@nestjs/common';
import { CreateIncomeDto } from './dtos/create-income.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from './incomes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IncomesService {
  constructor(@InjectRepository(Income) private repo: Repository<Income>) {}

  getIncomes() {
    const totalAmount = this.repo
      .createQueryBuilder('income')
      .select('SUM(income.amount)', 'amount')
      .addSelect('income.currency', 'currency')
      .where('income.date >= :startDate', {
        startDate: '2023-08-26T22:00:00.000Z',
      })
      .andWhere('income.date <= :endDate', {
        endDate: '2023-08-29T22:00:00.000Z',
      })
      .groupBy('income.currency')
      .getRawMany();

    const allIncomes = this.repo
      .createQueryBuilder('income')
      .select('income.income_type', 'incomeType')
      .addSelect('income.amount', 'amount')
      .addSelect('income.currency', 'currency')
      .addSelect('income.date', 'date')
      .addSelect('income.payment_type', 'paymentType')
      .addSelect('income.id', 'id')
      .where('income.date >= :startDate', {
        startDate: '2023-08-26T22:00:00.000Z',
      })
      .andWhere('income.date <= :endDate', {
        endDate: '2023-08-29T22:00:00.000Z',
      })
      .getRawMany();

    return Promise.all([allIncomes, totalAmount]).then((values) => {
      return {
        incomes: values[0],
        totalAmount: values[1],
      };
    });
  }

  getIncomeById(id: string) {
    return this.repo.findOneBy({ id });
  }

  addIncome(createIncomeDto: CreateIncomeDto) {
    const newIncome = this.repo.create({ ...createIncomeDto });

    return this.repo.save(newIncome);
  }
}
