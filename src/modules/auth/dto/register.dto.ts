import { Transform } from 'class-transformer'
import { IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator'

export class RegisterDto {
  @IsOptional()
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
