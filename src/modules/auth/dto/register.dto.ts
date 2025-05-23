import { Transform } from 'class-transformer'
import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  email: string

  @Transform(({ value }) => `${value}`.trim())
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string
}
