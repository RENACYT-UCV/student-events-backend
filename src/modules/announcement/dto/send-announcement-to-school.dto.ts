import { IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator'

export class SendAnnouncementToSchoolDto {
  @IsNotEmpty()
  @IsNumber()
  schoolId: number

  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  message: string

  @IsNotEmpty()
  @IsDateString()
  date: string

  @IsNotEmpty()
  @IsString()
  type: string
}
