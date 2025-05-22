import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { Event } from '@modules/event/entities/event.entity'
import { Assistance } from '@modules/attendance/entities/assistance.entity'
import { History } from '@modules/history/entities/history.entity'

@Entity('certificate')
export class Certificate extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Event)
  @JoinColumn({ name: 'event_id' })
  event: Relation<Event>

  @ManyToOne(() => Assistance)
  @JoinColumn({ name: 'assistance_id' })
  assistanceStatus: Relation<Assistance>

  @ManyToOne(() => History)
  @JoinColumn({ name: 'history_id' })
  history: Relation<History>
}