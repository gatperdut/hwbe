import { Expose, Type } from 'class-transformer';
import { CharacterOutDto } from 'src/character/dto/character-out.dto';
import { UserOutDto } from 'src/user/dto/user-out.dto';

export class CampaignPlayerOutDto {
  @Expose()
  userId!: number;

  @Expose()
  @Type(() => UserOutDto)
  user!: UserOutDto;

  @Expose()
  characterId!: number;

  @Expose()
  @Type(() => CharacterOutDto)
  character!: CharacterOutDto;
}
