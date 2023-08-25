import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSavingDto } from './dtos/create-saving.dto';
import { Saving } from './saving.entity';

@Injectable()
export class SavingService {
  constructor(@InjectRepository(Saving) private repo: Repository<Saving>) {}

  getSavings() {
    return this.repo.find();
  }

  getSavingById(id: string) {
    return this.repo.findOneBy({ id });
  }

  addSaving(createSavingDto: CreateSavingDto) {
    const newSaving = this.repo.create({ ...createSavingDto });

    return this.repo.save(newSaving);
  }
}
