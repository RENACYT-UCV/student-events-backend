import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { Assistance } from '@modules/attendance/entities/assistance.entity'
import { Event } from '@modules/event/entities/event.entity'
import { Question } from './question.entity'
import { Response } from './response.entity'

@Entity('survey')
export class Survey extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Assistance)
  @JoinColumn({ name: 'assistance_id' })
  assistance: Relation<Assistance>

  @ManyToOne(() => Event)
  @JoinColumn({ name: 'event_id' })
  event: Relation<Event>

  @OneToMany(() => Question, question => question.survey, {
    cascade: ['insert', 'update', 'recover'],
  })
  questions: Relation<Question[]>

  @Column({ length: 100, nullable: false })
  title: string

  @Column({ type: 'text', nullable: true })
  description: string

  @Column({ default: true })
  status: boolean

  @Column({ default: true })
  isActive: boolean

  @Column({ type: 'json', nullable: true })
  questionsData: string

  @OneToMany(() => Response, response => response.survey)
  responses: Relation<Response[]>
}
