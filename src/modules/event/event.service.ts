import { Injectable } from '@nestjs/common'
import { EventRepository } from './repositories/event.repository'
import { EventTypeRepository } from './repositories/event-type.repository'
import { CreateEventDto } from './dto/create-event.dto'
import { CreateEventTypeDto } from './dto/create-event-type.dto'

@Injectable()
export class EventService {
  constructor(
    private readonly eventRepository: EventRepository,
    private readonly eventTypeRepository: EventTypeRepository,
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
}