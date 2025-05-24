import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreateCertificateDto {
  @IsNotEmpty()
  @IsNumber()
  eventId: number

  @IsNotEmpty()
  @IsNumber()
  assistanceId: number

  @IsNotEmpty()
  @IsNumber()
  historyId: number
}
