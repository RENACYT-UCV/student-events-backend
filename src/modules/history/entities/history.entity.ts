import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation, OneToMany } from 'typeorm'
import { AuditBaseEntity } from '@modules/common'
import { User } from '@modules/user/entities/user.entity'
import { Certificate } from '@modules/certificate/entities/certificate.entity'

@Entity('history')
export class History extends AuditBaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => User, user => user.histories)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>

  @OneToMany(() => Certificate, certificate => certificate.history)
  certificates: Relation<Certificate[]>
}
