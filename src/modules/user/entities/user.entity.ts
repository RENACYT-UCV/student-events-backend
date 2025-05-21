import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'

@Entity()
export class User extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 100, nullable: true })
  name: string

  @Column({ length: 100, unique: true })
  email: string

  @Column({ length: 100 })
  password: string
}
