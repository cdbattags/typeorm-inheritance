import { Column, JoinColumn, ManyToOne } from 'typeorm'
import type { Relation } from 'typeorm'

import { AuditEntity } from '@/entities/common/AuditEntity'

import { User } from '@/entities'

export abstract class FullAuditEntity extends AuditEntity {
  @Column({ type: `uuid`, nullable: true })
  createdBy!: string

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  @JoinColumn({ name: `created_by`, referencedColumnName: `id` })
  createdByUser: Relation<User>

  @Column({ type: `uuid`, nullable: true})
  updatedBy: string

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  @JoinColumn({ name: `updated_by`, referencedColumnName: `id` })
  updatedByUser: Relation<User>
}
