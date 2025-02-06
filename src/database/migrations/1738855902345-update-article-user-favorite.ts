import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateArticleUserFavorite1738855902345
  implements MigrationInterface
{
  name = 'UpdateArticleUserFavorite1738855902345';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "article_liked_by_users_user" ("articleArticleid" integer NOT NULL, "userUserid" integer NOT NULL, CONSTRAINT "PK_2d3fe2996380addfa75aa07267f" PRIMARY KEY ("articleArticleid", "userUserid"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4f51d2b2f86a8f1ef1d85e7aa7" ON "article_liked_by_users_user" ("articleArticleid") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f8911d5dc5599a01360ab304c8" ON "article_liked_by_users_user" ("userUserid") `,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-02-06T15:31:42.780Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-02-06T15:31:42.780Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '"2025-02-06T15:31:42.780Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '"2025-02-06T15:31:42.780Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-02-06T15:31:42.780Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-02-06T15:31:42.780Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article_liked_by_users_user" ADD CONSTRAINT "FK_4f51d2b2f86a8f1ef1d85e7aa7c" FOREIGN KEY ("articleArticleid") REFERENCES "article"("articleid") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "article_liked_by_users_user" ADD CONSTRAINT "FK_f8911d5dc5599a01360ab304c8f" FOREIGN KEY ("userUserid") REFERENCES "user"("userid") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article_liked_by_users_user" DROP CONSTRAINT "FK_f8911d5dc5599a01360ab304c8f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article_liked_by_users_user" DROP CONSTRAINT "FK_4f51d2b2f86a8f1ef1d85e7aa7c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-02-06 14:43:43.077'`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-02-06 14:43:43.077'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '2025-02-06 14:43:43.077'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '2025-02-06 14:43:43.077'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-02-06 14:43:43.077'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-02-06 14:43:43.077'`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f8911d5dc5599a01360ab304c8"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_4f51d2b2f86a8f1ef1d85e7aa7"`,
    );
    await queryRunner.query(`DROP TABLE "article_liked_by_users_user"`);
  }
}
