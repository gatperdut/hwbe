import { IsEmail } from 'class-validator';

export class UserAvailabilityEmailInDto {
  @IsEmail()
  email!: string;
}
