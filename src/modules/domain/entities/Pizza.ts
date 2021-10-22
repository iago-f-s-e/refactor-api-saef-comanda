import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Index('PK__TamanhoP__AB3F3DE5005FFE8A', ['pizzaCode'], { unique: true })
@Entity('TamanhoPizza', { schema: 'dbo' })
export class Pizza {
  @PrimaryColumn({ type: 'int', name: 'cdTamanhoPizza' })
  pizzaCode!: number;

  @Column({ type: 'int', name: 'nrFatiaMaxQtd', nullable: true })
  maxSlices!: number;

  @Column({ type: 'varchar', name: 'dsDescricao', nullable: true, length: 50 })
  description!: string;
}
