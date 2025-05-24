import { IsNotEmpty, IsString, MaxLength, IsNumber } from 'class-validator'

export class CreateCareerDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string

  @IsNotEmpty()
  @IsNumber()
  schoolId: number
}
