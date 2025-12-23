import { IsDefined, IsInt } from 'class-validator';

export class CharacterByUserDto {
  @IsDefined()
  @IsInt()
  userId!: number;
}
