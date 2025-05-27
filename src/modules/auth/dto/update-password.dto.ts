import { IsNotEmpty, IsString } from 'class-validator'

export class UpdatePasswordDto {
  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsString()
  @IsNotEmpty()
  code: string
}
