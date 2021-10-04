import { Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Index('PK_Mesa_cdMesa', ['tableCode'], { unique: true })
@Entity('Mesa', { schema: 'public' })
export class Mesa {
  @PrimaryColumn({ type: 'int', name: 'cdMesa' })
  tableCode!: number

  @Column({ type: 'varchar', name: 'dsMesa', nullable: true })
  description?: string

  @Column({ type: 'boolean', name: 'EmUso', default: false })
  inUse!: boolean
}
