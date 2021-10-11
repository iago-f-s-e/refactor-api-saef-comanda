import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Budget, Product } from '.'

@Index('PK_IteOrcamento', ['budgetProductCode', 'budget', 'productCode'], { unique: true })
@Entity('IteOrcamento', { schema: process.env.NODE_ENV !== 'production' ? 'public' : 'dbo' })
export class BudgetProduct {
  @PrimaryColumn({ type: 'int', name: 'cdIteLcto' })
  budgetProductCode!: number

  @Column({ primary: true, type: 'int', name: 'cdProduto' })
  productCode!: number

  @Column({ type: 'real', name: 'nrQtd' })
  quantity!: number

  @Column({ type: 'real', name: 'vlPreco' })
  price!: number

  @Column({ type: 'real', name: 'vlDesconto', default: 0, nullable: true })
  value!: number

  @Column({ type: 'money', name: 'valorDesconto', default: 0 })
  discount!: number

  @Column({ type: 'real', name: 'nrFatorConversao', default: 1 })
  conversionFactor!: number

  @Column({ type: 'varchar', name: 'dsSituacao', default: '', nullable: true, length: 1 })
  situation!: string

  @Column({ type: process.env.NODE_ENV !== 'production' ? 'boolean' : 'bit', name: 'impresso', default: 0, nullable: true })
  printed!: boolean

  @Column({ type: 'varchar', name: 'observacao', nullable: true, length: 200 })
  observation?: string

  @Column({ type: 'varchar', name: 'nrLote', default: '', length: 15 })
  batch!: string

  @Column({ type: 'real', name: 'SOLICITADO', default: 0 })
  requested!: number

  @Column({ type: 'int', name: 'nrRequisicao', default: 0, nullable: true })
  request?: number

  @Column({ type: process.env.NODE_ENV !== 'production' ? 'boolean' : 'bit', name: 'itemPromocao', default: 0, nullable: true })
  isPromotion?: boolean

  @ManyToOne(() => Budget, budget => budget.products, { onDelete: 'CASCADE', onUpdate: 'CASCADE', primary: true })
  @JoinColumn({ name: 'nrOrcamento', referencedColumnName: 'budgetCode' })
  budget!: Budget;

  @ManyToOne(() => Product, product => product.budgets, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'cdProduto', referencedColumnName: 'productCode' }])
  product!: Product

  constructor () {
    this.printed = this.printed || false
    this.situation = this.situation || ''
  }
}
