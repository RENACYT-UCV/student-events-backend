import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { User } from '@modules/user/entities/user.entity'
import { EventDetail } from '@modules/event/entities/event-detail.entity'
import { School } from '@modules/school'

@Entity('announcement')
export class Announcement extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>

  @ManyToOne(() => EventDetail)
  @JoinColumn({ name: 'event_detail_id' })
  eventDetail: Relation<EventDetail>

  @ManyToOne(() => School)
  @JoinColumn({ name: 'school_id' })
  school: Relation<School>

  @Column({ length: 100, nullable: false })
  title: string

  @Column({ type: 'text', nullable: false })
  message: string

  @Column({ type: 'date', nullable: false })
  date: Date

  @Column({ length: 20, default: 'active' })
  status: string

  @Column({ length: 50, nullable: false })
  type: string
}