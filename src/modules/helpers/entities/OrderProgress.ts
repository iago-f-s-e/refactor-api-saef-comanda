import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('PK_AndamentoPedido_cdAndamentoPedido', ['orderProgressCode'], {
  unique: true
})
@Entity('AndamentoPedido', { schema: 'dbo' })
export class OrderProgress {
  @PrimaryGeneratedColumn('increment', { type: 'int', name: 'cdAndamentoPedido' })
  orderProgressCode!: number

  @Column({ type: 'int', name: 'nrOrcamento', nullable: true })
  budgetCode!: number

  @Column({ type: 'varchar', name: 'dsEntregaResidencia', nullable: true, length: 1 })
  homeDelivery!: 'N' | 'S'

  @Column({ type: 'datetime', name: 'dtDataPedido', nullable: true })
  orderDate!: Date

  @Column({ type: 'datetime', name: 'dtUltimaAlteracao', nullable: true })
  lastChange!: Date

  @Column({ type: 'varchar', name: 'dsStatus', nullable: true, length: 1 })
  status!: string

  constructor () {
    this.orderDate = this.orderDate || new Date().toISOString()
    this.homeDelivery = this.homeDelivery || 'N'
    this.lastChange = this.lastChange || new Date().toISOString()
    this.status = this.status || 'E'
  }
}
