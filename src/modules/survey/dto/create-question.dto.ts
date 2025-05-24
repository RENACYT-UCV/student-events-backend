import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { CreateOptionDto } from './create-option.dto'

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  text: string

  @ValidateNested({ each: true })
  @IsOptional()
  @IsArray()
  @Type(() => CreateOptionDto)
  options: CreateOptionDto[]
}
