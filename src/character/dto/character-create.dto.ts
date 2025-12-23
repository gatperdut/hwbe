import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CharacterClass } from 'src/generated/enums';

export class CharacterCreateDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsEnum(CharacterClass)
  @IsNotEmpty()
  class!: CharacterClass;

  @IsInt()
  userId!: number;
}
