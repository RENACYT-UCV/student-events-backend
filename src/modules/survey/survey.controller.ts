import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { SurveyService } from './survey.service'
import { CreateSurveyDto } from './dto/create-survey.dto'
import { CreateUserResponseDto } from './dto/create-user-response.dto'
// import { CreateUserAnwserDto } from './dto/create-user-anwser.dto'

@Controller('/api/survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Get()
  findAllSurveys() {
    return this.surveyService.findAllSurveys()
  }

  @Get(':id')
  findSurveyById(@Param('id') id: number) {
    return this.surveyService.findSurveyById(id)
  }

  @Get(':id/anwsers')
  findSurveyAnwsers(@Param('id') id: number) {
    return this.surveyService.findSurveyAnwsers(id)
  }

  @Post()
  createSurvey(@Body() data: CreateSurveyDto) {
    return this.surveyService.createSurvey(data)
  }

  @Post('/:surveyId/anwsers')
  createUserAnwsers(@Param('surveyId') surveyId: number, @Body() data: CreateUserResponseDto) {
    return this.surveyService.createUserAnwsers({ ...data, surveyId })
  }
}
