import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Survey } from '../entities/survey.entity'
import { CreateSurveyDto } from '../dto/create-survey.dto'

@Injectable()
export class SurveyRepository {
  constructor(
    @InjectRepository(Survey)
    private readonly surveyRepository: Repository<Survey>,
  ) {}

  async findAllSurveys() {
    return this.surveyRepository.find()
  }

  findSurveyAnwsers(id: number) {
    return this.surveyRepository.findOne({
      select: {
        id: true,
        title: true,
        responses: {
          id: true,
          user: {
            id: true,
            name: true,
            username: true,
          },
          answers: {
            id: true,
            question: {
              id: true,
              text: true,
            },
            option: {
              id: true,
              text: true,
            },
          },
        },
      },
      where: { id },
      relations: {
        responses: {
          user: true,
          answers: {
            question: true,
            option: true,
          },
        },
        // questions: {
        // options: {
        //   answers: true,
        // },
        // },
      },
    })
  }

  async findSurveyById(id: number) {
    return this.surveyRepository.findOne({
      where: { id },
      relations: {
        questions: {
          options: true,
        },
      },
    })
  }

  createSurvey(data: CreateSurveyDto) {
    const survey = this.surveyRepository.create(data)
    return this.surveyRepository.save(survey)
  }
}
