import { IsEmail } from 'class-validator';

export class UserAvailabilityEmailDtoIn {
  @IsEmail()
  email!: string;
}
