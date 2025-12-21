import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { SocketGateway } from './socket.gateway';

@Module({
  providers: [SocketGateway],
  imports: [AuthModule, UserModule],
})
export class SocketModule {}
