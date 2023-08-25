import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateExpenseTable1692965241846 implements MigrationInterface {
  name = 'CreateExpenseTable1692965241846';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "expense" (
        "id" SERIAL NOT NULL,
        "expense_category" character varying NOT NULL,
        "amount" numeric(10,2) NOT NULL DEFAULT '0',
        "currency" character varying NOT NULL,
        "date" TIMESTAMP NOT NULL, 
        "payment_type" character varying NOT NULL, 
        CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "expense"`);
  }
}
