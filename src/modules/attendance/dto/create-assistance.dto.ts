import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateAssistanceDto {
  @IsNotEmpty()
  @IsNumber()
  registrationId: number

  @IsNotEmpty()
  @IsBoolean()
  status: boolean
}
