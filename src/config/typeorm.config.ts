import { TypeOrmModuleOptions } from '@nestjs/typeorm'
// import { User } from "../users/user.entity";

export const sqliteConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'database.db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // entities: [User],
  synchronize: true,
  logging: false,
  keepConnectionAlive: true,
}
