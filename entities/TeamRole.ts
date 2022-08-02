import { Entity, Index, ManyToOne, PrimaryColumn } from 'typeorm'
import type { Relation } from 'typeorm'

import { AuditEntity } from '@/entities/common/AuditEntity'

import { Team } from '@/entities/Team'
import { User } from '@/entities/User'

@Entity()
export class TeamRole extends AuditEntity {
  @Index(`team_role_user_id_idx`)
  @PrimaryColumn({ type: `uuid` })
  userId!: string

  @Index(`team_role_team_id_idx`)
  @PrimaryColumn({ type: `uuid` })
  teamId!: string

  @ManyToOne(() => User, (user) => user.id)
  user: Relation<User>

  @ManyToOne(() => Team, (team) => team.id, { cascade: true })
  team: Relation<Team>
}
