import { Expose } from 'class-transformer';
import { CharacterClass } from 'src/generated/enums';

export class CharacterOutDto {
  @Expose()
  id!: number;

  @Expose()
  name!: string;

  @Expose()
  class!: CharacterClass;

  @Expose()
  userId!: number;
}
