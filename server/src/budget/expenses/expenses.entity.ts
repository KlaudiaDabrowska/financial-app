import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentType } from '../shared/types/finance';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expenseCategory: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  amount: number;

  @Column()
  currency: string;

  @Column()
  date: Date;

  @Column()
  paymentType: PaymentType;
}
