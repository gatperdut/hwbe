import { IsBoolean, IsDefined, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserCreateDto {
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

  @IsDefined()
  @IsBoolean()
  admin!: boolean;
}
