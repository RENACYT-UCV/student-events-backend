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
import { Survey } from './survey.entity'
import { Option } from './option.entity'

@Entity('question')
export class Question extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'text', nullable: false })
  text: string

  @ManyToOne(() => Survey, survey => survey.questions)
  @JoinColumn({ name: 'survey_id' })
  survey: Relation<Survey>

  @OneToMany(() => Option, option => option.question, { cascade: ['insert', 'recover'] })
  options: Relation<Option[]>
}
