import { Injectable } from '@nestjs/common'
import { EventRepository } from './repositories/event.repository'
import { EventTypeRepository } from './repositories/event-type.repository'
import { CreateEventDto } from './dto/create-event.dto'
import { CreateEventTypeDto } from './dto/create-event-type.dto'
import { CreateRegistrationDto } from './dto/create-registration.dto'
import { RegistrationRepository } from './repositories/registration.repository'

@Injectable()
export class EventService {
  constructor(
    private readonly eventRepository: EventRepository,
    private readonly eventTypeRepository: EventTypeRepository,
    private readonly registrationRepository: RegistrationRepository,
  ) {}

  findAllEvents() {
    return this.eventRepository.findAll()
  }

  findEventById(id: number) {
    return this.eventRepository.findById(id)
  }

  createEvent(createEventDto: CreateEventDto) {
    return this.eventRepository.createEvent(createEventDto)
  }

  findAllEventTypes() {
    return this.eventTypeRepository.findAll()
  }

  findEventTypeById(id: number) {
    return this.eventTypeRepository.findById(id)
  }

  createEventType(createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeRepository.createEventType(createEventTypeDto)
  }

  createRegistration(createRegistrationDto: CreateRegistrationDto) {
    return this.registrationRepository.createRegistration(createRegistrationDto)
  }
}
