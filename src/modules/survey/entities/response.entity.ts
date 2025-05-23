import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { Question } from './question.entity'
import { User } from '@modules/user/entities/user.entity'
import { Option } from './option.entity'

@Entity('response')
export class Response extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'question_id' })
  question: Relation<Question>

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>

  @ManyToOne(() => Option)
  @JoinColumn({ name: 'option_id' })
  option: Relation<Option>
}
