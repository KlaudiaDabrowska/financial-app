import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Saving {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  savingCategory: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  currency: string;

  @Column()
  date: Date;
}
