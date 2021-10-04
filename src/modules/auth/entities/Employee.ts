import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { Password } from './Password'
import { Role } from './Role'

@Index('PK__Funcionario', ['employeeCode'], { unique: true })
@Entity('Funcionario', { schema: 'public' })
export class Employee {
  @PrimaryColumn({ type: 'int', name: 'cdPessoa' })
  employeeCode!: number

  @Column({ type: 'varchar', name: 'nmFuncionario', nullable: true, length: 35 })
  employeeName!: string

  @ManyToOne(() => Role, role => role.employees, { onUpdate: 'CASCADE' })
  @JoinColumn([{ name: 'cdcargo', referencedColumnName: 'roleCode' }])
  role!: Role

  @OneToMany(() => Password, passwords => passwords.employee)
  passwords!: Password[]
}
