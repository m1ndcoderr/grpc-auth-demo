import { Injectable } from '@nestjs/common'
import { UserRepository } from 'src/users/user.repository'
import { InjectRepository } from '@nestjs/typeorm'
import { AuthCredentialsDto } from './dto/auth-credentials.dto'
import { JwtService } from '@nestjs/jwt'
import { UserToken } from 'src/users/user-token'
import { RpcException } from '@nestjs/microservices'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<UserToken> {
    const data = await this.userRepository.validatePassword(authCredentialsDto)
    if (!data) throw new RpcException('Invalid credentials.')
    const accessToken = await this.jwtService.sign(data)

    return new UserToken(accessToken)
  }
}
