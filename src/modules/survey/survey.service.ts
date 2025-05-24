import { Injectable } from '@nestjs/common'
import { SurveyRepository } from './repositories/survey.repository'
import { CreateSurveyDto } from './dto/create-survey.dto'
import { CreateUserResponseDto } from './dto/create-user-response.dto'
import { ResponseRepository } from './repositories/response.repository'

@Injectable()
export class SurveyService {
  constructor(
    private readonly surveyRepository: SurveyRepository,
    private readonly responseRepository: ResponseRepository,
  ) {}

  findAllSurveys() {
    return this.surveyRepository.findAllSurveys()
  }

  findSurveyById(id: number) {
    return this.surveyRepository.findSurveyById(id)
  }

  findSurveyAnwsers(id: number) {
    return this.surveyRepository.findSurveyAnwsers(id)
  }

  createSurvey(data: CreateSurveyDto) {
    return this.surveyRepository.createSurvey(data)
  }

  createUserAnwsers(data: { surveyId: number } & CreateUserResponseDto) {
    return this.responseRepository.createUserReponse(data)
  }
}
