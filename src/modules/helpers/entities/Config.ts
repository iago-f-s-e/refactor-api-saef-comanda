import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('Configuracao', { schema: 'dbo' })

export class Config {
  @PrimaryColumn({ type: 'int', name: 'cdConfiguracao' })
  configCode!: number

  @Column({ type: 'bit', name: 'UsaComanda', nullable: true })
  useOrder!: boolean

  @Column({ type: 'varchar', name: 'nmEmpresa', nullable: true, length: 40 })
  companyName!: string
}
