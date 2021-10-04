import { Column, Entity, Index, OneToMany, PrimaryColumn } from 'typeorm'
import { Employee } from './Employee'

@Index('PK__Cargo', ['roleCode'], { unique: true })
@Entity('Cargo', { schema: process.env.NODE_ENV !== 'production' ? 'public' : 'dbo' })
export class Role {
  @PrimaryColumn({ type: 'int', name: 'cdcargo' })
  roleCode!: number

  @Column({ type: 'varchar', name: 'nmcargo', length: 20 })
  roleName!: string

  @OneToMany(() => Employee, employees => employees.role)
  employees!: Employee[]
}
