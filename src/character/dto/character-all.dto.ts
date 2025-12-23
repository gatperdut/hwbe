import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { CharacterClass } from 'src/generated/enums';

export class CharacterAllDto {
  @IsOptional()
  @IsString()
  term!: string;

  @IsOptional()
  @IsEnum(CharacterClass)
  class!: CharacterClass;

  @IsOptional()
  @IsInt()
  userId!: number;
}
