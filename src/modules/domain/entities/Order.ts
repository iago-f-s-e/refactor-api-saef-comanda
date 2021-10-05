import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm'
import { Budget } from './Budget'

@Index('PK_Comanda_nrOrcamento', ['budgetCode'], { unique: true })
@Entity('Comanda', { schema: process.env.NODE_ENV !== 'production' ? 'public' : 'dbo' })
export class Order {
  @PrimaryColumn({ type: 'int', name: 'nrOrcamento' })
  budgetCode!: number;

  @Column({ type: 'varchar', name: 'nrComanda' })
  orderIdentifier!: string;

  @Column({ type: process.env.NODE_ENV !== 'production' ? 'boolean' : 'bit', name: 'finalizada', default: false })
  finished!: boolean;

  @Column({ type: 'int', name: 'OrcamentoPrincipal', nullable: true })
  mainBudget?: number;

  @OneToOne(() => Budget, budget => budget.order, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'nrOrcamento', referencedColumnName: 'budgetCode' }])
  budget!: Budget;
}
