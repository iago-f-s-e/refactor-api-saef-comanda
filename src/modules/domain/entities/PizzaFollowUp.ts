import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Product } from './Product'

@Index('PK_IteAcompanhamento_cdIteAcomp', ['pizzaFollowUpCode'], { unique: true })
@Entity('IteAcompanhamento', { schema: process.env.NODE_ENV !== 'production' ? 'public' : 'dbo' })
export class PizzaFollowUp {
  @PrimaryGeneratedColumn('increment', { type: 'int', name: 'cdIteAcomp' })
  pizzaFollowUpCode!: number

  @Column({ type: 'int', name: 'cdProdAcomp' })
  productFollowUpCode!: number

  @Column({ type: 'int', name: 'cdProduto' })
  productCode!: number

  @Column({ type: 'int', name: 'cdIteLcto', nullable: true })
  productIndex!: number

  @Column({ type: 'int', name: 'nrOrcamento' })
  budgetCode!: number

  @Column({ type: 'int', name: 'nrQtd', nullable: true })
  slices!: number

  @Column({ type: 'real', name: 'vlValor', nullable: true })
  value!: number

  @Column({ type: 'varchar', name: 'Observacao', nullable: true, length: 200 })
  observation?: string

  @ManyToOne(() => Product, product => product.pizzaFollowUp)
  @JoinColumn([{ name: 'cdProdAcomp', referencedColumnName: 'productCode' }])
  product!: Product
}
