import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, Relation, JoinColumn } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { School } from './school.entity'

@Entity()
export class Career extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 50 })
  name: string

  @ManyToOne(() => School, school => school.careers)
  @JoinColumn({ name: 'school_id' })
  school: Relation<School>
}
