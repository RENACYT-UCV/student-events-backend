import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Survey } from './entities/survey.entity'
import { Question } from './entities/question.entity'
import { Answer } from './entities/answer.entity'
import { Option } from './entities/option.entity'
import { SurveyController } from './survey.controller'
import { SurveyService } from './survey.service'
import { SurveyRepository } from './repositories/survey.repository'
import { ResponseRepository } from './repositories/response.repository'
import { Response } from './entities/response.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Survey, Question, Response, Answer, Option])],
  providers: [SurveyService, SurveyRepository, ResponseRepository],
  controllers: [SurveyController],
})
export class SurveyModule {}
