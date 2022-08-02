import { IsEmail } from 'class-validator'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import type { Relation } from 'typeorm'

import { FullAuditEntity } from '@/entities/common/FullAuditEntity'

import { TeamRole } from '@/entities/TeamRole'

@Entity()
export class User extends FullAuditEntity {
  @PrimaryGeneratedColumn(`uuid`)
  id!: string

  @Column({ type: `varchar`, length: 128, nullable: true })
  firstName!: string | null

  @Column({ type: `varchar`, length: 128, nullable: true })
  lastName!: string

  @Column({ type: `varchar`, length: 128, unique: true })
  @IsEmail()
  email!: string

  @Column({ type: `varchar`, nullable: true })
  company: string | undefined

  @Column({ type: `varchar`, nullable: true })
  title: string | undefined

  @OneToMany(() => TeamRole, (tr) => tr.user, { cascade: true, nullable: true })
  teams: Relation<TeamRole[]>
}
