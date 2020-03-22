import { Controller } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './user.entity'
import { UserRole } from './user-role.enum'
import { GrpcMethod, RpcException } from '@nestjs/microservices'
import { UserToken } from './user-token'
import { JwtService } from '@nestjs/jwt'

@Controller()
export class UsersController {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  @GrpcMethod('UsersService', 'GetAll')
  async getAll(userToken: UserToken): Promise<User[]> {
    const { role } = this.jwtService.verify(userToken.accessToken)
    if (!role) throw new RpcException('Some error occurred.')
    if (role === UserRole.ADMIN) return this.usersService.getAll()
    if (role === UserRole.MODER) return this.usersService.getAllWithoutAdmins()
    if (role === UserRole.USER) return this.usersService.getAllWithoutAdminsAndModerators()
  }
}
