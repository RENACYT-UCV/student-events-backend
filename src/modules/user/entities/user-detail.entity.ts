import { Column, Entity, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { User } from './user.entity'

@Entity('user_detail')
export class UserDetail extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 100, nullable: false })
  name: string

  @Column({ length: 100, nullable: false })
  lastname: string

  @Column({ nullable: true })
  phoneNumber: string

  @Column({ nullable: false })
  codeStudent: string

  @Column({ length: 100, nullable: false })
  universityCareer: string

  @OneToOne(() => User, user => user.userDetail)
  user: Relation<User>
}