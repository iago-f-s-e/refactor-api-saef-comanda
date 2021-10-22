import { Column, Entity, Index, OneToMany, PrimaryColumn } from 'typeorm'
import { Budget } from './Budget'

@Index('PK_Mesa_cdMesa', ['tableCode'], { unique: true })
@Entity('Mesa', { schema: 'dbo' })
export class Table {
  @PrimaryColumn({ type: 'int', name: 'cdMesa' })
  tableCode!: number

  @Column({ type: 'varchar', name: 'dsMesa', nullable: true })
  description?: string

  @Column({ type: 'bit', name: 'EmUso', default: false })
  inUse!: boolean

  @OneToMany(() => Budget, budgets => budgets.table)
  budgets!: Budget[]
}
