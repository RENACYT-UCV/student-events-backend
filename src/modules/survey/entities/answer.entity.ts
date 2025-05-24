import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
// import { User } from '@modules/user'
import { Option } from './option.entity'
import { Response } from './response.entity'
import { Question } from './question.entity'

@Entity()
export class Answer extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'question_id' })
  question: Relation<Question>

  @ManyToOne(() => Option, option => option.answers)
  @JoinColumn({ name: 'option_id' })
  option: Relation<Option>

  // @ManyToOne('User')
  // @JoinColumn({ name: 'user_id' })
  // user: Relation<User>

  @ManyToOne(() => Response, response => response.answers)
  @JoinColumn({ name: 'response_id' })
  response: Relation<Response>
}
