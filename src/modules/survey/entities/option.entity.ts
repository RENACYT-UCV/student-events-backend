import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { Question } from './question.entity'
import { Response } from './response.entity'

@Entity('option')
export class Option extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'question_id' })
  question: Relation<Question>

  @Column({ type: 'text', nullable: false })
  text: string

  @OneToMany(() => Response, response => response.option)
  responses: Relation<Response[]>
}