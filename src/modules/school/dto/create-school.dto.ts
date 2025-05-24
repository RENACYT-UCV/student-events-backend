import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateSchoolDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string
}
