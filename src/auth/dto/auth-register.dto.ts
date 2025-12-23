import { IsDefined, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthRegisterDto {
  @IsNotEmpty()
  @IsString()
  displayName!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsDefined()
  @IsString()
  @MinLength(6)
  password!: string;
}
