import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCommentEntity1738848838683 implements MigrationInterface {
  name = 'CreateCommentEntity1738848838683';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "comment" ("commentid" SERIAL NOT NULL, "content" character varying NOT NULL, "userUserid" integer, "registryDateCreateat" TIMESTAMP NOT NULL DEFAULT '"2025-02-06T13:33:59.074Z"', "registryDateUpdateat" TIMESTAMP NOT NULL DEFAULT '"2025-02-06T13:33:59.074Z"', CONSTRAINT "PK_8c659b63b7a64c5790f9cdbe3ad" PRIMARY KEY ("commentid"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-02-06T13:33:59.074Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-02-06T13:33:59.074Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '"2025-02-06T13:33:59.074Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '"2025-02-06T13:33:59.074Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ADD CONSTRAINT "FK_560a83d4051abcde8f4b3bc8d2d" FOREIGN KEY ("userUserid") REFERENCES "user"("userid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comment" DROP CONSTRAINT "FK_560a83d4051abcde8f4b3bc8d2d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '2025-02-06 10:43:27.353'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '2025-02-06 10:43:27.353'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-02-06 10:43:27.353'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-02-06 10:43:27.353'`,
    );
    await queryRunner.query(`DROP TABLE "comment"`);
  }
}
