import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeIdName1738809408672 implements MigrationInterface {
  name = 'ChangeIdName1738809408672';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article" DROP CONSTRAINT "FK_663eb59bd357c71095832760ea9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "userId" TO "userid"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" RENAME CONSTRAINT "PK_d72ea127f30e21753c9e229891e" TO "PK_755ac9fbd440bc9b97fe9532108"`,
    );
    await queryRunner.query(
      `ALTER SEQUENCE "user_userId_seq" RENAME TO "user_userid_seq"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" DROP CONSTRAINT "PK_ee6426f930999e7fcba40f6c574"`,
    );
    await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "articleId"`);
    await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "userUserId"`);
    await queryRunner.query(
      `ALTER TABLE "article" ADD "articleid" SERIAL NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ADD CONSTRAINT "PK_d01c38616ba722dcf94826c486b" PRIMARY KEY ("articleid")`,
    );
    await queryRunner.query(`ALTER TABLE "article" ADD "userUserid" integer`);
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '"2025-02-06T02:36:49.062Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '"2025-02-06T02:36:49.062Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '"2025-02-06T02:36:49.062Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '"2025-02-06T02:36:49.062Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ADD CONSTRAINT "FK_e1f8d8717e7c2bab8683d258c7e" FOREIGN KEY ("userUserid") REFERENCES "user"("userid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article" DROP CONSTRAINT "FK_e1f8d8717e7c2bab8683d258c7e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateUpdateat" SET DEFAULT '2025-02-05 16:40:37.234'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "registryDateCreateat" SET DEFAULT '2025-02-05 16:40:37.233'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryUpdateat" SET DEFAULT '2025-02-05 16:40:37.234'`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ALTER COLUMN "registryCreateat" SET DEFAULT '2025-02-05 16:40:37.233'`,
    );
    await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "userUserid"`);
    await queryRunner.query(
      `ALTER TABLE "article" DROP CONSTRAINT "PK_d01c38616ba722dcf94826c486b"`,
    );
    await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "articleid"`);
    await queryRunner.query(`ALTER TABLE "article" ADD "userUserId" integer`);
    await queryRunner.query(
      `ALTER TABLE "article" ADD "articleId" SERIAL NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ADD CONSTRAINT "PK_ee6426f930999e7fcba40f6c574" PRIMARY KEY ("articleId")`,
    );
    await queryRunner.query(
      `ALTER SEQUENCE "user_userid_seq" RENAME TO "user_userId_seq"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" RENAME CONSTRAINT "PK_755ac9fbd440bc9b97fe9532108" TO "PK_d72ea127f30e21753c9e229891e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "userid" TO "userId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ADD CONSTRAINT "FK_663eb59bd357c71095832760ea9" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
