import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CharacterClass } from 'src/generated/enums';

export class UserCharactersDto {
  @IsOptional()
  @IsString()
  term!: string;

  @IsOptional()
  @IsEnum(CharacterClass)
  class!: CharacterClass;
}
