import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Index('PK__Sequencial', ['sequentialCode'], { unique: true })
@Entity('Sequencial', { schema: process.env.NODE_ENV !== 'production' ? 'public' : 'dbo' })
export class Sequential {
  @PrimaryColumn({ type: 'int', name: 'cdCodigo' })
  sequentialCode!: number;

  @Column({ type: 'int', name: 'nrpedidos' })
  budgetCode!: number;
}
