import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
// import { Answer } from '../entities/answer.entity'
import { Response } from '../entities/response.entity'
import { CreateUserResponseDto } from '../dto/create-user-response.dto'

@Injectable()
export class ResponseRepository {
  constructor(
    @InjectRepository(Response)
    private readonly responseRepository: Repository<Response>,
  ) {}

  async createUserReponse(data: { surveyId: number } & CreateUserResponseDto) {
    const { surveyId, userId, answers } = data

    const response = this.responseRepository.create({
      survey: { id: surveyId },
      user: { id: userId },
      answers: answers.map(({ optionId, questionId }) => ({
        option: { id: optionId },
        question: { id: questionId },
      })),
    })

    return this.responseRepository.save(response)
  }
}
