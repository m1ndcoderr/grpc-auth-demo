import { Controller } from '@nestjs/common'
import { AuthCredentialsDto } from './dto/auth-credentials.dto'
import { AuthService } from './auth.service'
import { UserToken } from 'src/users/user-token'
import { GrpcMethod } from '@nestjs/microservices'

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @GrpcMethod('AuthService', 'SignIn')
  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<UserToken> {
    return this.authService.signIn(authCredentialsDto)
  }
}
