import { Transform } from 'class-transformer'
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
  @IsOptional()
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
