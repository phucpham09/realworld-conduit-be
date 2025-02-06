import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCommentArticle1738853022678 implements MigrationInterface {
  name = 'UpdateCommentArticle1738853022678';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comment" ADD "articleArticleid" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-02-06T14:43:43.077Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-02-06T14:43:43.077Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-02-06T14:43:43.077Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-02-06T14:43:43.077Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '"2025-02-06T14:43:43.077Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '"2025-02-06T14:43:43.077Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ADD CONSTRAINT "FK_24e776088de5041bc3139792f12" FOREIGN KEY ("articleArticleid") REFERENCES "article"("articleid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comment" DROP CONSTRAINT "FK_24e776088de5041bc3139792f12"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '2025-02-06 13:33:59.074'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '2025-02-06 13:33:59.074'`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-02-06 13:33:59.074'`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-02-06 13:33:59.074'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-02-06 13:33:59.074'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-02-06 13:33:59.074'`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" DROP COLUMN "articleArticleid"`,
    );
  }
}
