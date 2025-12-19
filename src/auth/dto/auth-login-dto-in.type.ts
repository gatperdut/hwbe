import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';

export class AuthLoginDtoIn {
  @IsEmail()
  @IsDefined()
  @IsNotEmpty()
  email!: string;

  @IsDefined()
  @IsNotEmpty()
  password!: string;
}
