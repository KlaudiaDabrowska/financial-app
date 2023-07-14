import { Injectable } from '@nestjs/common';
import { PaymentType } from './dtos/create-income.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Incomes } from './incomes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IncomesService {
  constructor(@InjectRepository(Incomes) private repo: Repository<Incomes>) {}

  getIncomes() {
    return this.repo.find();
  }

  getIncomeById(id: number) {
    return this.repo.findOneBy({ id });
  }

  addIncome(
    incomeType: string,
    amount: number,
    currency: string,
    date: string,
    paymentType: PaymentType,
  ) {
    const newIncome = this.repo.create({
      incomeType,
      amount,
      currency,
      date,
      paymentType,
    });

    return this.repo.save(newIncome);
  }
}
