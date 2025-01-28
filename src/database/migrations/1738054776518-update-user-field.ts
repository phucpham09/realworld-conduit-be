import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserField1738054776518 implements MigrationInterface {
  name = 'UpdateUserField1738054776518';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "user"
                RENAME COLUMN "name" TO "username"
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "registryDateCreateat"
            SET DEFAULT '"2025-01-28T08:59:36.892Z"'
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "registryDateUpdateat"
            SET DEFAULT '"2025-01-28T08:59:36.892Z"'
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "registryDateUpdateat"
            SET DEFAULT '2025-01-28 08:56:33.117'
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "registryDateCreateat"
            SET DEFAULT '2025-01-28 08:56:33.116'
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
                RENAME COLUMN "username" TO "name"
        `);
  }
}
