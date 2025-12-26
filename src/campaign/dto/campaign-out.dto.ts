import { Expose } from 'class-transformer';

export class CampaignOutDto {
  @Expose()
  id!: number;

  @Expose()
  name!: string;

  @Expose()
  masterId!: number;
}
