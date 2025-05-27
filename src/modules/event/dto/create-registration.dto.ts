import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'

export class CreateRegistrationDto {
  @IsNotEmpty()
  @IsInt()
  eventId: number

  @IsOptional()
  @IsInt()
  userId: number
}
