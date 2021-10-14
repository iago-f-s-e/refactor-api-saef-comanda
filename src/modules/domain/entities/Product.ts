
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { BudgetProduct, Group, PizzaFollowUp } from '.'

@Index('IX_Produto_nmProduto', ['name'], {})
@Index('PK_Produto', ['productCode'], { unique: true })
@Entity('Produto', { schema: process.env.NODE_ENV !== 'production' ? 'public' : 'dbo' })
export class Product {
  @PrimaryGeneratedColumn({ type: 'int', name: 'cdProduto' })
  productCode!: number

  @Column('varchar', { name: 'nmproduto', length: 40 })
  name!: string

  @Column({ type: 'money', name: 'vlPreco' })
  price!: number

  @Column({ type: 'varchar', name: 'dsUnidade', length: 6 })
  unity!: string

  @Column({ type: 'float', name: 'nrQtdreal', nullable: true })
  stock!: number

  @Column({ type: 'varchar', name: 'dsIPPT', nullable: true })
  ownProduct!: 'T' | 'P'

  @Column({ type: 'varchar', name: 'dsAtivo' })
  active!: 'N' | 'S'

  @Column({ type: 'varchar', name: 'impressoraComanda', default: 'L', length: 2 })
  printer!: 'B' | 'C' | 'L'

  @Column({ type: 'int', name: 'tipoComposicao' })
  composition!: number

  @Column({ type: 'varchar', name: 'dsCaminho', nullable: true })
  image?: string

  @OneToMany(() => BudgetProduct, budgets => budgets.product)
  budgets!: BudgetProduct[]

  @OneToMany(() => BudgetProduct, budgets => budgets.product)
  pizzaFollowUp!: PizzaFollowUp[]

  @ManyToOne(() => Group, group => group.products, { onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'cdgrupo', referencedColumnName: 'groupCode' }])
  group!: Group
}
