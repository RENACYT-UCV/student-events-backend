import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Relation,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { School } from '@modules/school'
import { History } from '@modules/history'
import { UserDetail } from './user-detail.entity'
import { Roles } from '../types/enums'

@Entity()
export class User extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 60, nullable: true })
  username: string

  @Column({ length: 100, unique: true })
  email: string

  @Column({ length: 10, nullable: true })
  password: string

  @Column({ default: true })
  isActive: boolean

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.User,
  })
  role: Roles

  @Column({ length: 100, nullable: true })
  name: string

  @Column({ length: 50, nullable: true })
  lastName: string

  @Column({ nullable: true })
  phoneNumber: number

  @Column({ nullable: true })
  studentCode: number

  @Column({ length: 100, nullable: true })
  resetToken: string

  @Column({ type: 'timestamp', nullable: true })
  resetTokenExpires: Date

  @ManyToOne(() => School, school => school.id, { nullable: true })
  @JoinColumn({ name: 'school_id' })
  school: Relation<School>

  @OneToOne(() => UserDetail, userDetail => userDetail.user)
  @JoinColumn({ name: 'user_detail_id' })
  userDetail: Relation<UserDetail>

  @OneToMany(() => History, history => history.user)
  histories: Relation<History[]>
}
