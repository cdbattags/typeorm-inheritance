import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

export abstract class AuditEntity {
  @CreateDateColumn({ type: `timestamptz`, default: () => `timezone('utc', now())`, nullable: true })
  createdAt!: Date

  @UpdateDateColumn({ type: `timestamptz`, default: () => `timezone('utc', now())`, nullable: true })
  updatedAt!: Date
}
