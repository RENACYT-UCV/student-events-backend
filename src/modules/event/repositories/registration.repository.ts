import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Registration } from '../entities/registration.entity'
import { CreateRegistrationDto } from '../dto/create-registration.dto'
import { Event } from '../entities/event.entity'
import { User } from '@modules/user/entities/user.entity'

@Injectable()
export class RegistrationRepository {
  constructor(
    @InjectRepository(Registration)
    private readonly registrationRepository: Repository<Registration>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createRegistration(data: CreateRegistrationDto) {
    const { eventId, userId } = data

    const event = await this.eventRepository.findOneBy({ id: eventId })
    const user = await this.userRepository.findOneBy({ id: userId })

    if (!event) {
      throw new Error('Event not found')
    }

    if (!user) {
      throw new Error('User not found')
    }

    const registration = this.registrationRepository.create({
      event,
      user,
    })

    return this.registrationRepository.save(registration)
  }

  findAll() {
    return this.registrationRepository.find({
      relations: ['event', 'user'],
    })
  }

  findById(id: number) {
    return this.registrationRepository.findOne({
      where: { id },
      relations: ['event', 'user'],
    })
  }
}
