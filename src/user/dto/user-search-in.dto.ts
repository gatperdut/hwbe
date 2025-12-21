import { IsOptional, IsString } from 'class-validator';

export class UserSearchInDto {
  @IsOptional()
  @IsString()
  term!: string;
}
