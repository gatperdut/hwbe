import { IsEmail } from 'class-validator';

export class UserAvailabilityEmailDto {
  @IsEmail()
  email!: string;
}
