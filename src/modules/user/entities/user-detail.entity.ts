import { Column, Entity, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { User } from './user.entity'

@Entity('user_detail')
export class UserDetail extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 100, nullable: true })
  name: string

  @Column({ length: 100, nullable: true })
  lastname: string

  @Column({ nullable: true })
  phoneNumber: string

  @Column({ nullable: true })
  codeStudent: string

  @Column({ length: 100, nullable: true })
  universityCareer: string

  @OneToOne(() => User, user => user.userDetail)
  user: Relation<User>
}
