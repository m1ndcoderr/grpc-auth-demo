import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm'
import { UserRole } from './user-role.enum'
import { hash } from 'bcrypt'

@Entity({ name: 'users' })
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({ name: 'email', nullable: false })
  email: string

  @Column({ name: 'password', nullable: false })
  password: string

  @Column({ enumName: 'role', nullable: false, default: UserRole.USER })
  role: UserRole

  @Column({ name: 'salt', nullable: false, default: 'salt' })
  salt: string

  async validatePassword(password: string): Promise<boolean> {
    return this.password === (await hash(password, this.salt))
  }
}
