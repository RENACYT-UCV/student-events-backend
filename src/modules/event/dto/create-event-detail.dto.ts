import { IsDateString, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'

export class CreateEventDetailDto {
  @IsNotEmpty()
  @IsDateString()
  startDate: string

  @IsNotEmpty()
  @IsDateString()
  endDate: string

  @IsNotEmpty()
  @IsString()
  startTime: string

  @IsNotEmpty()
  @IsString()
  endTime: string

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  modality: string

  @IsOptional()
  @IsString()
  description: string

  @IsOptional()
  @IsString()
  @MaxLength(255)
  location: string

  @IsOptional()
  @IsString()
  @MaxLength(255)
  url: string
}