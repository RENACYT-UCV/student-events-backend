import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { Event } from './event.entity'

@Entity('event_detail')
export class EventDetail extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'date', nullable: false })
  startDate: Date

  @Column({ type: 'date', nullable: false })
  endDate: Date

  @Column({ type: 'time', nullable: false })
  startTime: string

  @Column({ type: 'time', nullable: false })
  endTime: string

  @Column({ length: 50, nullable: false })
  modality: string

  @Column({ type: 'text', nullable: true })
  description: string

  @Column({ length: 255, nullable: true })
  location: string

  @Column({ length: 255, nullable: true })
  url: string

  @ManyToOne(() => Event, event => event.eventDetails)
  @JoinColumn({ name: 'event_id' })
  event: Relation<Event>
}
