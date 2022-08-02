import { Column, JoinColumn, ManyToOne } from 'typeorm'
import type { Relation } from 'typeorm'

import { AuditEntity } from '@/entities/common/AuditEntity'

import { User } from '@/entities/User'

export class FullAuditEntity extends AuditEntity {
  @Column({ type: `uuid` })
  createdBy!: string

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: `created_by`, referencedColumnName: `id` })
  createdByUser: Relation<User>

  @Column({ type: `uuid` })
  updatedBy: string

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: `updated_by`, referencedColumnName: `id` })
  updatedByUser: Relation<User>
}
