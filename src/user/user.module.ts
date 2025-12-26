import { Module } from '@nestjs/common';
import { CampaignModule } from 'src/campaign/character.module';
import { CharacterModule } from 'src/character/character.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule, CharacterModule, CampaignModule],
  exports: [UserService],
})
export class UserModule {
  // Empty
}
