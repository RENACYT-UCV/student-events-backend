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
import { Question } from './question.entity'
import { Answer } from './answer.entity'

@Entity('option')
export class Option extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Question, question => question.options)
  @JoinColumn({ name: 'question_id' })
  question: Relation<Question>

  @Column({ type: 'text', nullable: false })
  text: string

  @OneToMany(() => Answer, answer => answer.option, { cascade: ['insert', 'recover'] })
  answers: Relation<Answer[]>
}
