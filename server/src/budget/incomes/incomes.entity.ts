import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentType } from '../shared/types/finance';

@Entity()
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  incomeType: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  currency: string;

  @Column()
  date: Date;

  @Column()
  paymentType: PaymentType;
}
