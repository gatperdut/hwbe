import { Module } from '@nestjs/common';
import { CharacterModule } from 'src/character/character.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule, CharacterModule],
  exports: [UserService],
})
export class UserModule {
  // Empty
}
