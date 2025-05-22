import { Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { EventDetail } from './event-detail.entity'

@Entity()
export class Event {
  @PrimaryGeneratedColumn('increment')
  id: number

  @OneToMany(() => EventDetail, eventDetail => eventDetail.event)
  eventDetails: Relation<EventDetail[]>
}
