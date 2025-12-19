import { IsString } from 'class-validator';

export class UserAvailabilityDisplayNameDtoIn {
  @IsString()
  displayName!: string;
}
