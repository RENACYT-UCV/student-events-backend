import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { Event } from './event.entity'

@Entity('event_type')
export class EventType extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 100, nullable: false })
  title: string

  @Column({ type: 'text', nullable: true })
  description: string

  @OneToMany(() => Event, event => event.eventType)
  events: Relation<Event[]>
}