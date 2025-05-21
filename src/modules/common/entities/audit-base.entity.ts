import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

export abstract class AuditBaseEntity {
  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
