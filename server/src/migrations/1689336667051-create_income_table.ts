import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIncomeTable1689336667051 implements MigrationInterface {
  name = 'CreateIncomeTable1689336667051';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS income (
            "id" SERIAL NOT NULL, 
            "income_type" character varying NOT NULL, 
            "amount" numeric(10, 2) NOT NULL, 
            "currency" character varying NOT NULL, 
            "date" timestamp NOT NULL, 
            "payment_type" character varying NOT NULL, 
            CONSTRAINT "PK_d737b3d0314c1f0da5461a55e5e" PRIMARY KEY ("id")
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXSISTS income`);
  }
}
