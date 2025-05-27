import { IsInt, IsNotEmpty } from 'class-validator'

export class CreateRegistrationDto {
  @IsNotEmpty()
  @IsInt()
  eventId: number

  @IsNotEmpty()
  @IsInt()
  userId: number
}
