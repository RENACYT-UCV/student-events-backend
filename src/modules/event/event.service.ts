import { Injectable, NotFoundException } from '@nestjs/common'
import { EventRepository } from './repositories/event.repository'
import { EventTypeRepository } from './repositories/event-type.repository'
import { RegistrationRepository } from './repositories/registration.repository'
import { CreateEventDto } from './dto/create-event.dto'
import { CreateEventTypeDto } from './dto/create-event-type.dto'

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

  async registerUserToEvent(userId: number, eventId: number) {
    const event = await this.eventRepository.findById(eventId)
    if (!event) {
      throw new NotFoundException('Evento no encontrado')
    }

    const existingRegistration = await this.registrationRepository.findRegistration(userId, eventId)
    if (existingRegistration) {
      throw new Error('Usuario ya está registrado en este evento')
    }

    return this.registrationRepository.createRegistration(userId, eventId)
  }

  getUserRegistrations(userId: number) {
    return this.registrationRepository.findUserRegistrations(userId)
  }

  async checkUserRegistration(userId: number, eventId: number) {
    const registration = await this.registrationRepository.findRegistration(userId, eventId)
    return !!registration
  }
}
