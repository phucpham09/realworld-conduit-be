import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTagArticleRelation1738835317183 implements MigrationInterface {
  name = 'AddTagArticleRelation1738835317183';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tag_articles_article" ("tagTagid" integer NOT NULL, "articleArticleid" integer NOT NULL, CONSTRAINT "PK_44ec048cc372673521d1de42468" PRIMARY KEY ("tagTagid", "articleArticleid"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c0258ab031da3c4e1bdd1f945b" ON "tag_articles_article" ("tagTagid") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_88ed3d2a07020ca067523669d9" ON "tag_articles_article" ("articleArticleid") `,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '"2025-02-06T09:48:37.559Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '"2025-02-06T09:48:37.560Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-02-06T09:48:37.559Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-02-06T09:48:37.560Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "tag_articles_article" ADD CONSTRAINT "FK_c0258ab031da3c4e1bdd1f945bb" FOREIGN KEY ("tagTagid") REFERENCES "tag"("tagid") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "tag_articles_article" ADD CONSTRAINT "FK_88ed3d2a07020ca067523669d9e" FOREIGN KEY ("articleArticleid") REFERENCES "article"("articleid") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tag_articles_article" DROP CONSTRAINT "FK_88ed3d2a07020ca067523669d9e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tag_articles_article" DROP CONSTRAINT "FK_c0258ab031da3c4e1bdd1f945bb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-02-06 09:30:56.503'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-02-06 09:30:56.502'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '2025-02-06 09:30:56.503'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '2025-02-06 09:30:56.502'`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_88ed3d2a07020ca067523669d9"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_c0258ab031da3c4e1bdd1f945b"`,
    );
    await queryRunner.query(`DROP TABLE "tag_articles_article"`);
  }
}
