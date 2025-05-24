import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Event } from '../entities/event.entity'
import { EventDetail } from '../entities/event-detail.entity'
import { EventType } from '../entities/event-type.entity'
import { CreateEventDto } from '../dto/create-event.dto'

@Injectable()
export class EventRepository {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(EventDetail)
    private readonly eventDetailRepository: Repository<EventDetail>,
  ) {}

  findAll() {
    return this.eventRepository.find({
      relations: ['eventDetails', 'eventType'],
    })
  }

  findById(id: number) {
    return this.eventRepository.findOne({
      where: { id },
      relations: ['eventDetails', 'eventType'],
    })
  }

  async createEvent(data: CreateEventDto) {
    const { eventTypeId, ...restData } = data

    const event = this.eventRepository.create({
      // name: data.name,
      // abilityAmount: data.abilityAmount,
      // status: data.status,
      // eventType: { id: data.eventTypeId },
      ...restData,
      eventType: {
        id: eventTypeId,
      },
    })

    const savedEvent = await this.eventRepository.save(event)

    const eventDetail = this.eventDetailRepository.create({
      ...data.eventDetail,
      event: savedEvent,
    })

    await this.eventDetailRepository.save(eventDetail)

    return this.findById(savedEvent.id)
  }
}
