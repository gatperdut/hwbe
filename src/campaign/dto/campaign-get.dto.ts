import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class CampaignGetDto {
  @IsInt()
  @Type((): NumberConstructor => Number)
  campaignId!: number;
}
