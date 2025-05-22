import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Relation, OneToMany } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { EventDetail } from './event-detail.entity'
import { EventType } from './event-type.entity'
  
@Entity('event')
export class Event extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 100, nullable: false })
  name: string

  @Column({ name: 'ability_amount', type: 'int', default: 0 })
  abilityAmount: number

  @Column({ length: 20, default: 'active' })
  status: string

  @OneToMany(() => EventDetail, eventDetail => eventDetail.event, { cascade: true })
  eventDetails: Relation<EventDetail[]>

  @ManyToOne(() => EventType, eventType => eventType.events)
  @JoinColumn({ name: 'event_type_id' })
  eventType: Relation<EventType>
}