import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArticle1738294008908 implements MigrationInterface {
  name = 'CreateArticle1738294008908';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "article" ("articleId" integer NOT NULL, "title" character varying NOT NULL, "slug" character varying NOT NULL, "description" character varying NOT NULL, "body" character varying NOT NULL, "registryCreateat" TIMESTAMP NOT NULL DEFAULT '"2025-01-31T03:26:49.300Z"', "registryUpdateat" TIMESTAMP NOT NULL DEFAULT '"2025-01-31T03:26:49.300Z"', CONSTRAINT "PK_ee6426f930999e7fcba40f6c574" PRIMARY KEY ("articleId"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-01-31T03:26:49.300Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-01-31T03:26:49.300Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-01-28 09:04:31.081'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-01-28 09:04:31.081'`,
    );
    await queryRunner.query(`DROP TABLE "article"`);
  }
}
