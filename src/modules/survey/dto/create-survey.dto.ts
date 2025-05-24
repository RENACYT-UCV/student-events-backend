import { Transform, Type } from 'class-transformer'
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import { CreateQuestionDto } from './create-question.dto'

export class CreateSurveyDto {
  @Transform(({ value }) => `${value}`.trim())
  @IsString()
  @IsNotEmpty()
  title: string

  // @Transform(({ value }) => `${value}`.trim())
  @IsString()
  @IsNotEmpty()
  description: string

  @ValidateNested({ each: true })
  @IsOptional()
  @IsArray()
  @Type(() => CreateQuestionDto)
  questions: CreateQuestionDto[]
}
