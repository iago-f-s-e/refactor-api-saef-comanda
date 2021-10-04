import {MigrationInterface, QueryRunner} from "typeorm";

export class a1633353225922 implements MigrationInterface {
    name = 'a1633353225922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Cargo" ("cdcargo" integer NOT NULL, "nmcargo" character varying(20) NOT NULL, CONSTRAINT "PK_80d5a0d0f05c09c951405b9cb1a" PRIMARY KEY ("cdcargo"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "PK__Cargo" ON "Cargo" ("cdcargo") `);
        await queryRunner.query(`CREATE TABLE "Funcionario" ("cdPessoa" integer NOT NULL, "nmFuncionario" character varying(35), "cdcargo" integer, CONSTRAINT "PK_37f6d278d0524f7dc5ceb76fe75" PRIMARY KEY ("cdPessoa"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "PK__Funcionario" ON "Funcionario" ("cdPessoa") `);
        await queryRunner.query(`ALTER TABLE "Funcionario" ADD CONSTRAINT "FK_ed9249a3f7b2e3b3def79d0c61e" FOREIGN KEY ("cdcargo") REFERENCES "Cargo"("cdcargo") ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Funcionario" DROP CONSTRAINT "FK_ed9249a3f7b2e3b3def79d0c61e"`);
        await queryRunner.query(`DROP INDEX "public"."PK__Funcionario"`);
        await queryRunner.query(`DROP TABLE "Funcionario"`);
        await queryRunner.query(`DROP INDEX "public"."PK__Cargo"`);
        await queryRunner.query(`DROP TABLE "Cargo"`);
    }

}
