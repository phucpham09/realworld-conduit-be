import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserField1738054592705 implements MigrationInterface {
  name = 'UpdateUserField1738054592705';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "user"
                RENAME COLUMN "username" TO "name"
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "registryDateCreateat"
            SET DEFAULT '"2025-01-28T08:56:33.116Z"'
        `);
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "registryDateUpdateat"
            SET DEFAULT '"2025-01-28T08:56:33.117Z"'
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
    await queryRunner.query(`
            ALTER TABLE "user"
                RENAME COLUMN "name" TO "username"
        `);
  }
}
