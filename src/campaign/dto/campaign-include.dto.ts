import { Type } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

export class CampaignIncludeDto {
  @IsOptional()
  @IsBoolean()
  @Type((): BooleanConstructor => Boolean)
  includeMaster!: boolean;

  @IsOptional()
  @IsBoolean()
  @Type((): BooleanConstructor => Boolean)
  includePlayers!: boolean;
}
