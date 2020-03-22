import { Controller } from '@nestjs/common'
import { AuthCredentialsDto } from './dto/auth-credentials.dto'
import { AuthService } from './auth.service'
import { UserToken } from 'src/users/user-token'
import { GrpcMethod } from '@nestjs/microservices'
import { Metadata } from 'grpc'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @GrpcMethod('AuthService', 'SignIn')
  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<UserToken> {
    const meta = new Metadata()
    const token = await this.authService.signIn(authCredentialsDto)
    
    meta.add('token', token.accessToken)
    return token
  }
}
