import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTagEntity1738834255840 implements MigrationInterface {
  name = 'CreateTagEntity1738834255840';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tag" ("tagid" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_2890e536f078243ddfeebae98cc" PRIMARY KEY ("tagid"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-02-06T09:30:56.502Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-02-06T09:30:56.503Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '"2025-02-06T09:30:56.502Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '"2025-02-06T09:30:56.503Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '2025-02-06 02:36:49.062'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '2025-02-06 02:36:49.062'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-02-06 02:36:49.062'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-02-06 02:36:49.062'`,
    );
    await queryRunner.query(`DROP TABLE "tag"`);
  }
}
