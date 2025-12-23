import { IsString } from 'class-validator';

export class UserAvailabilityDisplayNameDto {
  @IsString()
  displayName!: string;
}
