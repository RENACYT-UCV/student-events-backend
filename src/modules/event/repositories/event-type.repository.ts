import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { EventType } from '../entities/event-type.entity'
import { CreateEventTypeDto } from '../dto/create-event-type.dto'

@Injectable()
export class EventTypeRepository {
  constructor(
    @InjectRepository(EventType)
    private readonly eventTypeRepository: Repository<EventType>,
  ) {}

  findAll() {
    return this.eventTypeRepository.find({
      relations: ['events'],
    })
  }

  findById(id: number) {
    return this.eventTypeRepository.findOne({
      where: { id },
      relations: ['events'],
    })
  }

  createEventType(data: CreateEventTypeDto) {
    const eventType = this.eventTypeRepository.create(data)
    return this.eventTypeRepository.save(eventType)
  }
}