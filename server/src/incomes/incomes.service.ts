import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { PaymentType } from './dtos/create-income.dto';

const incomes = [
  {
    id: 1,
    incomeType: 'salary',
    amount: 1234,
    currency: 'pln',
    date: moment().format('DD.MM.YYYY'),
    paymentType: PaymentType.card, //or cash
  },
  {
    id: 2,
    incomeType: 'salary',
    amount: 133,
    currency: 'pln',
    date: moment().format('DD.MM.YYYY'),
    paymentType: PaymentType.cash, //or cash
  },
];

@Injectable()
export class IncomesService {
  getIncomes() {
    return incomes;
  }
  getIncomeById(id: number) {
    return incomes.find((x) => x.id === id);
  }
  addIncome(
    incomeType: string,
    amount: number,
    currency: string,
    date: string,
    paymentType: PaymentType,
  ) {
    const id = Math.round(Math.random() * 1000);
    const newIncome = { id, incomeType, amount, currency, date, paymentType };
    incomes.push(newIncome);
    return newIncome;
  }
}
