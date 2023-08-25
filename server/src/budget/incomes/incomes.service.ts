import { Injectable } from '@nestjs/common';
import { CreateIncomeDto } from './dtos/create-income.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from './incomes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IncomesService {
  constructor(@InjectRepository(Income) private repo: Repository<Income>) {}

  getIncomes() {
    return this.repo.find();
  }

  getIncomeById(id: string) {
    return this.repo.findOneBy({ id });
  }

  addIncome(createIncomeDto: CreateIncomeDto) {
    const newIncome = this.repo.create({ ...createIncomeDto });

    return this.repo.save(newIncome);
  }
}
