import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { Registration } from '@modules/event/entities/registration.entity'

@Entity('report')
export class Report extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => Registration)
  @JoinColumn({ name: 'registration_id' })
  registration: Relation<Registration>
}


//Relacion reporte con registro