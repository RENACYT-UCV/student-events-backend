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
import { Registration } from '@modules/event/entities/registration.entity'
import { Survey } from '@modules/survey/entities/survey.entity'
// import { Answer } from '@modules/survey/entities/answer.entity'

@Entity('assistance')
export class Assistance extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Registration)
  @JoinColumn({ name: 'registration_id' })
  registration: Relation<Registration>

  @Column({ nullable: false, default: false })
  status: boolean

  @OneToMany(() => Survey, survey => survey.assistance)
  surveys: Relation<Survey[]>

  // @OneToMany(() => Answer, answer => answer.question)
  // answers: Relation<Answer[]>
}
