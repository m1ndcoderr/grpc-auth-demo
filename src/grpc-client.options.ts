import { ClientOptions, Transport } from '@nestjs/microservices'
import { join } from 'path'

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['auth', 'users'],
    protoPath: [
      join(__dirname, '../src/grpc-protos/auth/auth.proto'),
      join(__dirname, '../src/grpc-protos/users/users.proto'),
    ],
  },
}
