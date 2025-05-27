import { Injectable, NotFoundException } from '@nestjs/common'
import { RegistrationRepository } from './registration.repository'
import { CreateRegistrationDto } from './dto/create-registration.dto'
import { Registration } from '../event/entities/registration.entity'

@Injectable()
export class RegistrationService {
  constructor(private readonly registrationRepository: RegistrationRepository) {}

  async create(createRegistrationDto: CreateRegistrationDto): Promise<Registration> {
    const { eventId, userId } = createRegistrationDto
    const existingRegistration = await this.registrationRepository.findOneByUserIdAndEventId(
      userId,
      eventId,
    )

    if (existingRegistration) {
      return existingRegistration
    }

    return this.registrationRepository.createRegistration(eventId, userId)
  }

  async findOneByUserIdAndEventId(
    userId: number,
    eventId: number,
  ): Promise<Registration | undefined> {
    return this.registrationRepository.findOneByUserIdAndEventId(userId, eventId)
  }
}
