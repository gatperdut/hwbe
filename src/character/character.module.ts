import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';

@Module({
  controllers: [CharacterController],
  providers: [CharacterService],
  imports: [PrismaModule],
  exports: [CharacterService],
})
export class CharacterModule {
  // Empty
}
