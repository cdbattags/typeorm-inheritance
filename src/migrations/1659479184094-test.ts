import { MigrationInterface, QueryRunner } from "typeorm";

export class test1659479184094 implements MigrationInterface {
    name = 'test1659479184094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("createdAt" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()), "createdBy" uuid, "updatedBy" uuid, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(128), "lastName" character varying(128), "email" character varying(128) NOT NULL, "company" character varying, "title" character varying, "created_by" uuid, "updated_by" uuid, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team_role" ("createdAt" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()), "userId" uuid NOT NULL, "teamId" uuid NOT NULL, CONSTRAINT "PK_fbcb7a5df5ccebaab446b3a2281" PRIMARY KEY ("userId", "teamId"))`);
        await queryRunner.query(`CREATE INDEX "team_role_user_id_idx" ON "team_role" ("userId") `);
        await queryRunner.query(`CREATE INDEX "team_role_team_id_idx" ON "team_role" ("teamId") `);
        await queryRunner.query(`CREATE TABLE "team" ("createdAt" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()), "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_d2f5e343630bd8b7e1e7534e82e" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6bfae5ab9f39212d5b6ad0276b1" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_role" ADD CONSTRAINT "FK_8a0de8269ca85c268355057007b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_role" ADD CONSTRAINT "FK_2d572b5dc481b1a415d2dd6369a" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "team_role" DROP CONSTRAINT "FK_2d572b5dc481b1a415d2dd6369a"`);
        await queryRunner.query(`ALTER TABLE "team_role" DROP CONSTRAINT "FK_8a0de8269ca85c268355057007b"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6bfae5ab9f39212d5b6ad0276b1"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_d2f5e343630bd8b7e1e7534e82e"`);
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP INDEX "public"."team_role_team_id_idx"`);
        await queryRunner.query(`DROP INDEX "public"."team_role_user_id_idx"`);
        await queryRunner.query(`DROP TABLE "team_role"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
