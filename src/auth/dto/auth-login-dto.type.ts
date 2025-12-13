import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';

export class AuthLoginDto {
  @IsEmail()
  @IsDefined()
  @IsNotEmpty()
  email!: string;

  @IsDefined()
  @IsNotEmpty()
  password!: string;
}
