import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1738050568311 implements MigrationInterface {
  name = 'Initial1738050568311';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-01-28T07:49:28.703Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-01-28T07:49:28.704Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-01-28 03:14:42.654'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-01-28 03:14:42.654'`,
    );
  }
}
