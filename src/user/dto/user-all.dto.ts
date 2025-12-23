import { IsOptional, IsString } from 'class-validator';

export class UserAllDto {
  @IsOptional()
  @IsString()
  term!: string;
}
