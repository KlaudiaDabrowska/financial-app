import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSavingDto } from './dtos/create-saving.dto';
import { Saving } from './saving.entity';

@Injectable()
export class SavingService {
  constructor(@InjectRepository(Saving) private repo: Repository<Saving>) {}

  getSavings() {
    const totalAmount = this.repo
      .createQueryBuilder('saving')
      .select('SUM(saving.amount)', 'amount')
      .addSelect('saving.currency', 'currency')
      .where('saving.date >= :startDate', {
        startDate: '2023-08-10T22:00:00.000Z',
      })
      .andWhere('saving.date <= :endDate', {
        endDate: '2023-08-29T22:00:00.000Z',
      })
      .groupBy('saving.currency')
      .getRawMany();

    const allSavings = this.repo
      .createQueryBuilder('saving')
      .select('saving.saving_category', 'savingCategory')
      .addSelect('saving.amount', 'amount')
      .addSelect('saving.currency', 'currency')
      .addSelect('saving.date', 'date')
      .addSelect('saving.id', 'id')
      .where('saving.date >= :startDate', {
        startDate: '2023-08-10T22:00:00.000Z',
      })
      .andWhere('saving.date <= :endDate', {
        endDate: '2023-08-29T22:00:00.000Z',
      })
      .getRawMany();

    return Promise.all([allSavings, totalAmount]).then((values) => {
      return {
        savings: values[0],
        totalAmount: values[1],
      };
    });
  }

  getSavingById(id: string) {
    return this.repo.findOneBy({ id });
  }

  addSaving(createSavingDto: CreateSavingDto) {
    const newSaving = this.repo.create({ ...createSavingDto });

    return this.repo.save(newSaving);
  }
}
