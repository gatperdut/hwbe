import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UsersController],
  providers: [UserService],
  imports: [PrismaModule],
  exports: [UserService],
})
export class UserModule {
  // Empty
}
