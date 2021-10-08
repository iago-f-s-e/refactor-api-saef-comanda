import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('Configuracao', { schema: process.env.NODE_ENV !== 'production' ? 'public' : 'dbo' })

export class Config {
  @PrimaryColumn({ type: 'int', name: 'cdConfiguracao' })
  configCode!: number

  @Column({ type: process.env.NODE_ENV !== 'production' ? 'boolean' : 'bit', name: 'UsaComanda', nullable: true })
  useOrder!: boolean

  @Column({ type: 'varchar', name: 'nmEmpresa', nullable: true, length: 40 })
  companyName!: string
}
