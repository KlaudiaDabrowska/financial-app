import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { CreateIncomeDto } from './dtos/create-income.dto';

@Controller('incomes')
export class IncomesController {
  constructor(private incomesService: IncomesService) {}

  @Get()
  getIncomes() {
    return this.incomesService.getIncomes();
  }

  @Get('/:id')
  getIncomeById(@Param('id') id: string) {
    return this.incomesService.getIncomeById(+id);
  }

  @Post()
  addIncome(
    @Body()
    body: CreateIncomeDto,
  ) {
    return this.incomesService.addIncome(body);
  }
}
