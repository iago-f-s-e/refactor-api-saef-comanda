import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Product } from '.'

@Index('PK__Grupo', ['groupCode'], { unique: true })
@Entity('Grupo', { schema: process.env.NODE_ENV !== 'production' ? 'public' : 'dbo' })
export class Group {
  @PrimaryGeneratedColumn('increment', { type: 'int', name: 'cdgrupo' })
  groupCode!: number

  @Column({ type: 'varchar', name: 'nmgrupo', length: 20 })
  name!: string

  @Column({ type: process.env.NODE_ENV !== 'production' ? 'boolean' : 'bit', name: 'dsAtivoSaefComanda', default: 1 })
  isActive!: boolean

  @OneToMany(() => Product, products => products.group)
  products!: Product[]
}
