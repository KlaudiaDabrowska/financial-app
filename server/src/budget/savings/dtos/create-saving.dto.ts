import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Currency } from 'src/budget/shared/types/finance';

export class CreateSavingDto {
  @IsString()
  @IsNotEmpty()
  savingCategory: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsEnum(Currency)
  currency = 'PLN';

  @IsString()
  @IsNotEmpty()
  date: string;
}
