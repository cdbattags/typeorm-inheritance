import { Column, Index, JoinColumn, ManyToOne } from 'typeorm'
import type { Relation } from 'typeorm'

import { FullAuditEntity } from '@/entities/common/FullAuditEntity'

import { Team } from '@/entities'

export abstract class WithOwnerEntity extends FullAuditEntity {
  @Index()
  @Column({ type: `uuid` })
  belongsTo!: string

  @ManyToOne(() => Team, (team) => team.id)
  @JoinColumn({ name: `belongs_to`, referencedColumnName: `id` })
  belongsToTeam: Relation<Team>
}
