import { Type } from 'class-transformer'
import { IsNumber } from 'class-validator'

export class CreateAnwserDto {
  @IsNumber()
  @Type(() => Number)
  questionId: number

  @IsNumber()
  @Type(() => Number)
  optionId: number
}
