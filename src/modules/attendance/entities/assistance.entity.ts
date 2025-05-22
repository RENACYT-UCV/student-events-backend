import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { Registration } from '@modules/event/entities/registration.entity'
import { Survey } from '@modules/survey/entities/survey.entity'
import { Response } from '@modules/survey/entities/response.entity'

@Entity('assistance')
export class Assistance extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Registration)
  @JoinColumn({ name: 'registration_id' })
  registration: Relation<Registration>

  @Column({ length: 20, default: 'pending' })
  status: string

  @OneToMany(() => Survey, survey => survey.assistance)
  surveys: Relation<Survey[]>

  @OneToMany(() => Response, response => response.question)
  responses: Relation<Response[]>
}