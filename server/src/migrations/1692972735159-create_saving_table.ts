import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSavingTable1692972735159 implements MigrationInterface {
  name = 'CreateSavingTable1692972735159';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "saving" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "saving_category" character varying NOT NULL, "amount" numeric(10,2) NOT NULL, "currency" character varying NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_bfd6d89cc3414622fbd5c34a296" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "income" DROP CONSTRAINT "PK_d737b3d0314c1f0da5461a55e5e"`,
    );
    await queryRunner.query(`ALTER TABLE "income" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "income" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "income" ADD CONSTRAINT "PK_29a10f17b97568f70cee8586d58" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "income" ALTER COLUMN "amount" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" DROP CONSTRAINT "PK_edd925b450e13ea36197c9590fc"`,
    );
    await queryRunner.query(`ALTER TABLE "expense" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "expense" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" ADD CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" ALTER COLUMN "amount" DROP DEFAULT`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "expense" ALTER COLUMN "amount" SET DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" DROP CONSTRAINT "PK_edd925b450e13ea36197c9590fc"`,
    );
    await queryRunner.query(`ALTER TABLE "expense" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "expense" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "expense" ADD CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "income" ALTER COLUMN "amount" SET DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "income" DROP CONSTRAINT "PK_29a10f17b97568f70cee8586d58"`,
    );
    await queryRunner.query(`ALTER TABLE "income" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "income" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "income" ADD CONSTRAINT "PK_d737b3d0314c1f0da5461a55e5e" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`DROP TABLE "saving"`);
  }
}
