import { Column, Entity, PrimaryGeneratedColumn, OneToMany, Relation } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { Career } from './career.entity'

@Entity()
export class School extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 50 })
  name: string

  @OneToMany(() => Career, career => career.id)
  careers: Relation<Career[]>
}
