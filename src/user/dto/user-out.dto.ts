import { Expose } from 'class-transformer';

export class UserDtoOut {
  @Expose()
  email!: string;

  @Expose()
  displayName!: string;

  @Expose()
  admin!: boolean;
}
