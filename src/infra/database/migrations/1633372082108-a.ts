import {MigrationInterface, QueryRunner} from "typeorm";

export class a1633372082108 implements MigrationInterface {
    name = 'a1633372082108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Senha" ("dsNome" character varying(10) NOT NULL, "dsSenha" character varying(6) NOT NULL, "cdPessoa" integer, CONSTRAINT "PK_f255f806cac13021b8f8d71a4c3" PRIMARY KEY ("dsNome", "dsSenha"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "PK__Senha" ON "Senha" ("dsNome", "dsSenha") `);
        await queryRunner.query(`CREATE TABLE "Cargo" ("cdcargo" integer NOT NULL, "nmcargo" character varying(20) NOT NULL, CONSTRAINT "PK_80d5a0d0f05c09c951405b9cb1a" PRIMARY KEY ("cdcargo"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "PK__Cargo" ON "Cargo" ("cdcargo") `);
        await queryRunner.query(`CREATE TABLE "Funcionario" ("cdPessoa" integer NOT NULL, "nmFuncionario" character varying(35), "cdcargo" integer, CONSTRAINT "PK_37f6d278d0524f7dc5ceb76fe75" PRIMARY KEY ("cdPessoa"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "PK__Funcionario" ON "Funcionario" ("cdPessoa") `);
        await queryRunner.query(`CREATE TABLE "Mesa" ("cdMesa" integer NOT NULL, "dsMesa" character varying, "EmUso" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_715ad666334067c231d3a0bcfc1" PRIMARY KEY ("cdMesa"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "PK_Mesa_cdMesa" ON "Mesa" ("cdMesa") `);
        await queryRunner.query(`ALTER TABLE "Senha" ADD CONSTRAINT "FK_672901e5f79bbc03eccb0e1b57f" FOREIGN KEY ("cdPessoa") REFERENCES "Funcionario"("cdPessoa") ON DELETE NO ACTION ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "Funcionario" ADD CONSTRAINT "FK_ed9249a3f7b2e3b3def79d0c61e" FOREIGN KEY ("cdcargo") REFERENCES "Cargo"("cdcargo") ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Funcionario" DROP CONSTRAINT "FK_ed9249a3f7b2e3b3def79d0c61e"`);
        await queryRunner.query(`ALTER TABLE "Senha" DROP CONSTRAINT "FK_672901e5f79bbc03eccb0e1b57f"`);
        await queryRunner.query(`DROP INDEX "public"."PK_Mesa_cdMesa"`);
        await queryRunner.query(`DROP TABLE "Mesa"`);
        await queryRunner.query(`DROP INDEX "public"."PK__Funcionario"`);
        await queryRunner.query(`DROP TABLE "Funcionario"`);
        await queryRunner.query(`DROP INDEX "public"."PK__Cargo"`);
        await queryRunner.query(`DROP TABLE "Cargo"`);
        await queryRunner.query(`DROP INDEX "public"."PK__Senha"`);
        await queryRunner.query(`DROP TABLE "Senha"`);
    }

}
