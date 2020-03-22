import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserRepository } from './user.repository'
import { User } from './user.entity'
import { Not } from 'typeorm'
import { UserRole } from './user-role.enum'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  /**
   * Получить всех пользователей.
   */
  async getAll(): Promise<User[]> {
    const found = await this.userRepository.find()
    if (!found) throw new NotFoundException('Users not found.')
    return found
  }

  /**
   * Получить всех пользователей кроме администраторов.
   */
  async getAllWithoutAdmins(): Promise<User[]> {
    const found = await this.userRepository.find({ where: { role: Not(UserRole.ADMIN) } })
    if (!found) throw new NotFoundException('Users not found.')
    return found
  }

  /**
   * Получить только обычных пользователей.
   */
  async getAllWithoutAdminsAndModerators(): Promise<User[]> {
    const found = await this.userRepository.find({ where: { role: UserRole.USER } })
    if (!found) throw new NotFoundException('Users not found.')
    return found
  }
}
