import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm'
import { User } from '@modules/user'
import { Survey } from './survey.entity'
import { Answer } from './answer.entity'

@Entity()
export class Response {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne('User')
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>

  @ManyToOne('Survey')
  @JoinColumn({ name: 'survey_id' })
  survey: Relation<Survey>

  @CreateDateColumn()
  submittedAt: Date

  @OneToMany(() => Answer, answer => answer.response, {
    cascade: ['insert', 'recover'],
  })
  answers: Relation<Answer[]>
}
