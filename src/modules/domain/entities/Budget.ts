import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Table } from '.'

export interface RegisterOrcamento {
  mesa: number
  garçom: number
}

@Index('IX_Orcamento_cdCliente', ['client'], {})
@Index('IX_Orcamento_cdPessoa', ['personCode'], {})
@Index('PK_Orcamento', ['budgetCode'], { unique: true })
@Entity('Orcamento', { schema: process.env.NODE_ENV !== 'production' ? 'public' : 'dbo' })
export class Budget {
  @PrimaryColumn({ type: 'int', name: 'nrOrcamento' })
  budgetCode!: number

  @Column({ type: 'int', name: 'cdMesa', nullable: true })
  tableCode!: number

  @Column({ type: 'int', name: 'cdPessoa', nullable: true })
  personCode!: number

  @Column({ type: 'int', name: 'cdGarcom', nullable: true })
  employeeCode!: number

  @Column({ type: 'char', name: 'dsEmUso', default: 'N' })
  inUse!: 'N' | 'S'

  @Column({ type: 'char', name: 'dsImpresso', default: 'N' })
  printed!: 'N' | 'S'

  @Column({ type: 'money', name: 'vlvalor', nullable: true })
  value!: number

  @CreateDateColumn({ type: process.env.NODE_ENV !== 'production' ? 'timestamp' : 'datetime', name: 'dtEmissao', nullable: true })
  emission!: Date

  @CreateDateColumn({ type: process.env.NODE_ENV !== 'production' ? 'timestamp' : 'datetime', name: 'hrHora', default: 'now()', nullable: true })
  hour!: Date

  @Column({ type: 'real', name: 'nrDesconto', default: 0, nullable: true })
  discount!: number

  @Column({ type: 'money', name: 'vlServico', default: 0, nullable: true })
  service!: number

  @Column({ type: 'int', name: 'cdCliente', nullable: true })
  client!: number

  @Column({ type: 'varchar', name: 'dsFlag', nullable: true, length: 20 })
  flag!: string

  @Column({ type: 'varchar', name: 'dsFormatacao', nullable: true, length: 2 })
  formatting!: string

  @Column({ type: 'real', name: 'vlTaxaEntrega', nullable: true })
  deliveryFee!: number

  @Column({ type: 'char', name: 'tipoPedido', default: 'M', nullable: true, length: 1 })
  orderType!: string

  @Column({ type: process.env.NODE_ENV !== 'production' ? 'boolean' : 'bit', name: 'quitado', default: 0, nullable: true })
  paidOut!: boolean

  @Column({ type: 'real', name: 'trocoPara', default: 0, nullable: true })
  moneyExchange!: number

  @ManyToOne(() => Table, table => table.budgets, { onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'cdMesa', referencedColumnName: 'tableCode' }])
  table!: Table
}
