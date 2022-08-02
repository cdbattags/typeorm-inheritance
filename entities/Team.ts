import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import type { Relation } from 'typeorm'

import { AuditEntity } from '@/entities/common/AuditEntity'

import { TeamRole } from '@/entities/TeamRole'

@Entity()
export class Team extends AuditEntity {
  @PrimaryGeneratedColumn(`uuid`)
  id: string

  @Column({ type: `varchar` })
  name!: string

  @OneToMany(() => TeamRole, (tr) => tr.team)
  users: Relation<TeamRole[]>
}
