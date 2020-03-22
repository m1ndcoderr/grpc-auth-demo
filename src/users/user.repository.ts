import { Repository, EntityRepository } from 'typeorm'
import { User } from './user.entity'
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto'
import { JwtPayload } from 'src/auth/jwt-payload.interface'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async validatePassword(authCredentialsDto: AuthCredentialsDto): Promise<JwtPayload> {
    const { email, password } = authCredentialsDto
    const user = await this.findOne({ email })
    return user && (await user.validatePassword(password)) ? { email: user.email, role: user.role } : null
  }
}
