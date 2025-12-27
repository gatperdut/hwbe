import { Expose, Type } from 'class-transformer';
import { CampaignPlayerOutDto } from 'src/campaign-player/dto/campaign-player-out.dto';
import { UserOutDto } from 'src/user/dto/user-out.dto';

export class CampaignOutDto {
  @Expose()
  id!: number;

  @Expose()
  name!: string;

  @Expose()
  masterId!: number;

  @Expose()
  @Type((): typeof UserOutDto => UserOutDto)
  master?: UserOutDto;

  @Expose()
  @Type((): typeof CampaignPlayerOutDto => CampaignPlayerOutDto)
  players?: CampaignPlayerOutDto[];
}
