import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArticle1738337108065 implements MigrationInterface {
  name = 'CreateArticle1738337108065';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "article" ADD "userUserId" integer`);
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-01-31T15:25:08.439Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-01-31T15:25:08.439Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '"2025-01-31T15:25:08.439Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '"2025-01-31T15:25:08.439Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ADD CONSTRAINT "FK_663eb59bd357c71095832760ea9" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article" DROP CONSTRAINT "FK_663eb59bd357c71095832760ea9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '2025-01-31 03:26:49.3'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '2025-01-31 03:26:49.3'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-01-31 03:26:49.3'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-01-31 03:26:49.3'`,
    );
    await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "userUserId"`);
  }
}
