import { Column, Entity } from 'typeorm'

@Entity('Configuracao', { schema: process.env.NODE_ENV !== 'production' ? 'public' : 'dbo' })
export class Configuracao {
  @Column({ type: 'bit', name: 'UsaComanda', nullable: true })
  useOrder!: boolean;

  @Column({ type: 'varchar', name: 'nmEmpresa', nullable: true, length: 40 })
  companyName!: string;
}
