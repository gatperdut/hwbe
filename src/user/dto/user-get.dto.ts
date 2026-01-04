import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class UserGetDto {
  @IsInt()
  @Type((): NumberConstructor => Number)
  userId!: number;
}
