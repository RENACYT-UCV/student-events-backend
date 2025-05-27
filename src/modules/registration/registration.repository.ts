import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Registration } from '../event/entities/registration.entity'
import { Event } from '../event/entities/event.entity'
import { User } from '../user/entities/user.entity'

@Injectable()
export class RegistrationRepository {
  constructor(
    @InjectRepository(Registration)
    private registrationRepository: Repository<Registration>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createRegistration(eventId: number, userId: number): Promise<Registration> {
    const event = await this.eventRepository.findOne({ where: { id: eventId } })
    const user = await this.userRepository.findOne({ where: { id: userId } })

    if (!event || !user) {
      throw new Error('Event or User not found')
    }

    const registration = this.registrationRepository.create({
      event: event,
      user: user,
    })

    return this.registrationRepository.save(registration)
  }

  async findOneByUserIdAndEventId(
    userId: number,
    eventId: number,
  ): Promise<Registration | undefined> {
    return this.registrationRepository.findOne({
      where: {
        user: { id: userId },
        event: { id: eventId },
      },
    })
  }
}
