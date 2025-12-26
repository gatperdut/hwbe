import { IsInt, IsOptional, IsString } from 'class-validator';

export class CampaignAllDto {
  @IsOptional()
  @IsString()
  term!: string;

  @IsOptional()
  @IsInt()
  masterId!: number;
}
