import { MigrationInterface, QueryRunner } from 'typeorm';

export class ArticleIdAutoGen1738773636854 implements MigrationInterface {
  name = 'ArticleIdAutoGen1738773636854';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-02-05T16:40:37.233Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-02-05T16:40:37.234Z"'`,
    );
    await queryRunner.query(
      `CREATE SEQUENCE IF NOT EXISTS "article_articleId_seq" OWNED BY "article"."articleId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "articleId" SET DEFAULT nextval('"article_articleId_seq"')`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '"2025-02-05T16:40:37.233Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '"2025-02-05T16:40:37.234Z"'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '2025-02-05 16:37:33.161'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '2025-02-05 16:37:33.16'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "articleId" DROP DEFAULT`,
    );
    await queryRunner.query(`DROP SEQUENCE "article_articleId_seq"`);
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-02-05 16:37:33.161'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-02-05 16:37:33.16'`,
    );
  }
}
