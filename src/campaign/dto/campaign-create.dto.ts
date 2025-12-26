import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CampaignCreateDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsInt()
  masterId!: number;
}
