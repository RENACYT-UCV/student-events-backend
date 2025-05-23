import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Relation,
  JoinColumn,
  OneToOne,
} from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { School } from '@modules/school'
import { UserDetail } from './user-detail.entity'

@Entity()
export class User extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 60 })
  username: string

  @Column({ length: 100, unique: true })
  email: string

  @Column({ length: 100 })
  password: string

  @Column({ default: true })
  isActive: boolean

  //Decidir bien
  /*
  @Column({ length:  })
  role: string
  */

  @Column({ length: 100, nullable: true })
  name: string

  @Column({ length: 50 })
  lastName: string

  @Column({ nullable: true })
  phoneNumber: number

  @Column({})
  studentCode: number

  @ManyToOne(() => School, school => school.id)
  @JoinColumn({ name: 'school_id' })
  school: Relation<School>

  @OneToOne(() => UserDetail, userDetail => userDetail.user)
  @JoinColumn({ name: 'user_detail_id' })
  userDetail: Relation<UserDetail>

  //Relación para History
  /*
  @OneToOne(()=> History)
  @JoinColumn()
  history:History
  */
}

//Solo esta relacionado escuela y registro
