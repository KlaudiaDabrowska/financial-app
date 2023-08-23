import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export enum PaymentType {
  cash = 'cash',
  card = 'card',
}

export enum Currency {
  PLN = 'PLN',
  USD = 'USD',
  GBP = 'GBP',
}

export class CreateIncomeDto {
  @IsString()
  @IsNotEmpty()
  incomeType: string;

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
