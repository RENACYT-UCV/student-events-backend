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

  @ManyToOne(() => Survey)
  @JoinColumn({ name: 'survey_id' })
  survey: Relation<Survey>

  @Column({ type: 'text', nullable: false })
  text: string

  @OneToMany(() => Option, option => option.question)
  options: Relation<Option[]>
}
//Solo esta relacionado survey y opcion
