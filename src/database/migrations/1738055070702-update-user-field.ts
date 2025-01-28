import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserField1738055070702 implements MigrationInterface {
  name = 'UpdateUserField1738055070702';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "registryDateCreateat"
            SET DEFAULT '"2025-01-28T09:04:31.081Z"'
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "registryDateUpdateat"
            SET DEFAULT '"2025-01-28T09:04:31.081Z"'
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "registryDateUpdateat"
            SET DEFAULT '2025-01-28 07:49:28.704'
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "registryDateCreateat"
            SET DEFAULT '2025-01-28 07:49:28.703'
        `);
  }
}
