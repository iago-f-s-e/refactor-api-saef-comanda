import {MigrationInterface, QueryRunner} from "typeorm";

export class b1633353716209 implements MigrationInterface {
    name = 'b1633353716209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Senha" ("dsNome" character varying(10) NOT NULL, "dsSenha" character varying(6) NOT NULL, "cdPessoa" integer, CONSTRAINT "PK_f255f806cac13021b8f8d71a4c3" PRIMARY KEY ("dsNome", "dsSenha"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "PK__Senha" ON "Senha" ("dsNome", "dsSenha") `);
        await queryRunner.query(`ALTER TABLE "Senha" ADD CONSTRAINT "FK_672901e5f79bbc03eccb0e1b57f" FOREIGN KEY ("cdPessoa") REFERENCES "Funcionario"("cdPessoa") ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Senha" DROP CONSTRAINT "FK_672901e5f79bbc03eccb0e1b57f"`);
        await queryRunner.query(`DROP INDEX "public"."PK__Senha"`);
        await queryRunner.query(`DROP TABLE "Senha"`);
    }

}
