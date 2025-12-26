import { IsOptional, IsString } from 'class-validator';

export class UserCampaignsDto {
  @IsOptional()
  @IsString()
  term!: string;
}
