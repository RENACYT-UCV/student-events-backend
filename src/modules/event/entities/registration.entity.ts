import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { Event } from './event.entity'
import { User } from '@modules/user/entities/user.entity'
import { Assistance } from '@modules/attendance/entities/assistance.entity'
import { Report } from '@modules/report/entities/report.entity'

@Entity('registration')
export class Registration extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Event)
  @JoinColumn({ name: 'event_id' })
  event: Relation<Event>

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>

  @OneToMany(() => Assistance, assistance => assistance.registration)
  assistances: Relation<Assistance[]>

  @OneToMany(() => Report, report => report.registration)
  reports: Relation<Report[]>
}
