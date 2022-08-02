import { IsEmail } from 'class-validator'
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import type { Relation } from 'typeorm'

import { FullAuditEntity } from '@/entities/common/FullAuditEntity'

import { TeamRole } from '@/entities/TeamRole'

@Entity()
export class User extends FullAuditEntity {
  @PrimaryColumn(`uuid`)
  id!: string

  @Column({ type: `varchar`, length: 128 })
  firstName!: string

  @Column({ type: `varchar`, length: 128 })
  lastName!: string

  @Column({ type: `varchar`, length: 128, unique: true })
  @IsEmail()
  email!: string

  @Column({ type: `varchar`, nullable: true })
  company: string | undefined

  @Column({ type: `varchar`, nullable: true })
  title: string | undefined

  @OneToMany(() => TeamRole, (tr) => tr.user, { cascade: true })
  teams: Relation<TeamRole[]>
}
