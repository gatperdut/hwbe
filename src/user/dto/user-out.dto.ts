import { Expose } from 'class-transformer';

export class UserOutDto {
  @Expose()
  id!: number;

  @Expose()
  email!: string;

  @Expose()
  displayName!: string;

  @Expose()
  admin!: boolean;
}
