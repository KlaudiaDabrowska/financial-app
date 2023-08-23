import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentType } from './dtos/create-income.dto';

@Entity()
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  incomeType: string;

  @Column()
  amount: number;

  @Column()
  currency: string;

  @Column()
  date: string;

  @Column()
  paymentType: PaymentType;
}
