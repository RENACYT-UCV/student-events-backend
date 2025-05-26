import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Registration } from '../entities/registration.entity'

@Injectable()
export class RegistrationRepository {
  constructor(
    @InjectRepository(Registration)
    private readonly registrationRepository: Repository<Registration>,
  ) {}

  async createRegistration(userId: number, eventId: number) {
    const registration = this.registrationRepository.create({
      user: { id: userId },
      event: { id: eventId },
    })
    return await this.registrationRepository.save(registration)
  }

  async findUserRegistrations(userId: number) {
    return await this.registrationRepository.find({
      where: { user: { id: userId } },
      relations: ['event', 'event.eventDetails', 'event.eventType'],
    })
  }

  async findRegistration(userId: number, eventId: number) {
    return await this.registrationRepository.findOne({
      where: {
        user: { id: userId },
        event: { id: eventId },
      },
    })
  }
}
