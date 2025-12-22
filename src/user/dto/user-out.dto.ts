import { Expose } from 'class-transformer';

export class UserDtoOut {
  @Expose()
  id!: number;

  @Expose()
  email!: string;

  @Expose()
  displayName!: string;

  @Expose()
  admin!: boolean;
}
