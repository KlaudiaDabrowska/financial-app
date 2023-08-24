import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Currency, PaymentType } from 'src/budget/shared/types/finance';

export class CreateExpenseDto {
  @IsString()
  @IsNotEmpty()
  expenseCategory: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsEnum(Currency)
  currency = 'PLN';

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsEnum(PaymentType)
  @IsNotEmpty()
  paymentType: PaymentType;
}
