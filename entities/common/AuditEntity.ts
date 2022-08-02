import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

// TODO switch to full audit entity
export class AuditEntity {
  @CreateDateColumn({ type: `timestamptz`, default: () => `timezone('utc', now())` })
  createdAt!: Date

  @UpdateDateColumn({ type: `timestamptz`, default: () => `timezone('utc', now())` })
  updatedAt!: Date
}
