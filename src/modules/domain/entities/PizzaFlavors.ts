import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Index('PK_IteTamanhoPizza', ['pizzaCode', 'productCode'], { unique: true })
@Entity('IteTamanhoPizza', { schema: 'dbo' })
export class PizzaFlavors {
  @PrimaryColumn({ type: 'int', name: 'cdTamanhoPizza' })
  pizzaCode!: number;

  @PrimaryColumn({ type: 'int', name: 'cdProduto' })
  productCode!: number;

  @Column('decimal', { name: 'vlTamanhoPreco', nullable: true, scale: 2 })
  value!: number;
}
