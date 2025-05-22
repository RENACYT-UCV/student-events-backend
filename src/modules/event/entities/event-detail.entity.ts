import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { Event } from './event.entity'

@Entity()
export class EventDetail {
  @PrimaryGeneratedColumn('increment', { name: 'event_detail_id' })
  id: number

  @ManyToOne(() => Event, event => event.eventDetails)
  @JoinColumn()
  event: Relation<Event>
}
