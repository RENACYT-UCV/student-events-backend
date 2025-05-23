import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from 'class-validator'
import { CreateEventDetailDto } from './create-event-detail.dto'

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string

  @IsOptional()
  @IsInt()
  @Min(0)
  abilityAmount: number

  @IsOptional()
  @IsString()
  @MaxLength(20)
  status: string

  @IsNotEmpty()
  @IsInt()
  eventTypeId: number

  @IsNotEmpty()
  eventDetail: CreateEventDetailDto
}