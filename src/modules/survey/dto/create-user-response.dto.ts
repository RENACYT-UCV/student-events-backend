import { Type } from 'class-transformer'
import { IsArray, IsNumber, ValidateNested } from 'class-validator'
import { CreateAnwserDto } from './create-answer.dto'

export class CreateUserResponseDto {
  @IsNumber()
  @Type(() => Number)
  userId: number

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CreateAnwserDto)
  answers: CreateAnwserDto[]
}
