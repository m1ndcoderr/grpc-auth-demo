import { Controller } from '@nestjs/common'
import { UsersService } from './users.service'
import { UserRole } from './user-role.enum'
import { GrpcMethod, RpcException } from '@nestjs/microservices'
import { UserToken } from './user-token'
import { JwtService } from '@nestjs/jwt'

@Controller()
export class UsersController {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  @GrpcMethod('UsersService', 'GetAll')
  // make sure you return an object, even if you want an array!
  async getAll(userToken: UserToken): Promise<object> {
    try {
      const { role } = await this.jwtService.verifyAsync(userToken.accessToken)

      if (role === UserRole.ADMIN) return { users: await this.usersService.getAll() }
      if (role === UserRole.MODER) return { users: await this.usersService.getAllWithoutAdmins() }
      if (role === UserRole.USER)
        return {
          users: await this.usersService.getAllWithoutAdminsAndModerators(),
        }

      return { users: [] }
    } catch (e) {
      console.log(e.message)
      throw new RpcException(e.message)
    }
  }
}
