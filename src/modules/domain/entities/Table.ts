import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Index('PK_Mesa_cdMesa', ['tableCode'], { unique: true })
@Entity('Mesa', { schema: process.env.NODE_ENV !== 'production' ? 'public' : 'dbo' })
export class Table {
  @PrimaryColumn({ type: 'int', name: 'cdMesa' })
  tableCode!: number

  @Column({ type: 'varchar', name: 'dsMesa', nullable: true })
  description?: string

  @Column({ type: process.env.NODE_ENV !== 'production' ? 'boolean' : 'bit', name: 'EmUso', default: false })
  inUse!: boolean
}
