import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { sqliteConfig } from './config/typeorm.config'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(sqliteConfig), AuthModule],
})
export class AppModule {}
