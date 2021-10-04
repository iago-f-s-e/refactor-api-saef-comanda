import { Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Employee } from './Employee'

@Index('PK__Senha', ['name', 'password'], { unique: true })
@Entity('Senha', { schema: process.env.NODE_ENV !== 'production' ? 'public' : 'dbo' })
export class Password {
  @PrimaryColumn({ type: 'varchar', name: 'dsNome', length: 10 })
  name!: string

  @PrimaryColumn({ type: 'varchar', name: 'dsSenha', length: 6 })
  password!: string

  @ManyToOne(() => Employee, employee => employee.passwords, { onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'cdPessoa', referencedColumnName: 'employeeCode' }])
  employee!: Employee
}
