import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CampaignAllDto {
  @IsOptional()
  @IsString()
  term!: string;

  @IsOptional()
  @IsInt()
  @Type((): NumberConstructor => Number)
  participantId!: number;
}
