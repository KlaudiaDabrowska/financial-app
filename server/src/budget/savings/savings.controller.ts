import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSavingDto } from './dtos/create-saving.dto';
import { SavingService } from './savings.service';

@Controller('savings')
export class SavingsController {
  constructor(private savingsService: SavingService) {}

  @Get()
  getSavings() {
    return this.savingsService.getSavings();
  }

  @Get('/:id')
  getSavingById(@Param('id') id: string) {
    return this.savingsService.getSavingById(id);
  }

  @Post()
  addSaving(
    @Body()
    body: CreateSavingDto,
  ) {
    return this.savingsService.addSaving(body);
  }
}
