import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixTagArticleRelation1738838606964 implements MigrationInterface {
  name = 'FixTagArticleRelation1738838606964';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "article_tags_tag" ("articleArticleid" integer NOT NULL, "tagTagid" integer NOT NULL, CONSTRAINT "PK_ca936bcddea042cbd6f256d99e8" PRIMARY KEY ("articleArticleid", "tagTagid"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5e0907ecc24a307bb3ef54c31d" ON "article_tags_tag" ("articleArticleid") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_30920d148cc5728862717ad1fa" ON "article_tags_tag" ("tagTagid") `,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-02-06T10:43:27.353Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-02-06T10:43:27.353Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '"2025-02-06T10:43:27.353Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '"2025-02-06T10:43:27.353Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article_tags_tag" ADD CONSTRAINT "FK_5e0907ecc24a307bb3ef54c31d7" FOREIGN KEY ("articleArticleid") REFERENCES "article"("articleid") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "article_tags_tag" ADD CONSTRAINT "FK_30920d148cc5728862717ad1fa8" FOREIGN KEY ("tagTagid") REFERENCES "tag"("tagid") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article_tags_tag" DROP CONSTRAINT "FK_30920d148cc5728862717ad1fa8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article_tags_tag" DROP CONSTRAINT "FK_5e0907ecc24a307bb3ef54c31d7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '2025-02-06 09:48:37.56'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '2025-02-06 09:48:37.559'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-02-06 09:48:37.56'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-02-06 09:48:37.559'`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_30920d148cc5728862717ad1fa"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_5e0907ecc24a307bb3ef54c31d"`,
    );
    await queryRunner.query(`DROP TABLE "article_tags_tag"`);
  }
}
