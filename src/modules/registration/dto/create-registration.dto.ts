import { IsNumber } from 'class-validator'

export class CreateRegistrationDto {
  @IsNumber()
  eventId: number

  @IsNumber()
  userId: number
}
