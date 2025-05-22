import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common'
import { EventService } from './event.service'
import { CreateEventDto } from './dto/create-event.dto'
import { CreateEventTypeDto } from './dto/create-event-type.dto'

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  findAllEvents() {
    return this.eventService.findAllEvents()
  }

  @Get(':id')
  findEventById(@Param('id', ParseIntPipe) id: number) {
    return this.eventService.findEventById(id)
  }

  @Post()
  createEvent(@Body() createEventDto: CreateEventDto) {
    return this.eventService.createEvent(createEventDto)
  }

  @Get('types')
  findAllEventTypes() {
    return this.eventService.findAllEventTypes()
  }

  @Get('types/:id')
  findEventTypeById(@Param('id', ParseIntPipe) id: number) {
    return this.eventService.findEventTypeById(id)
  }

  @Post('types')
  createEventType(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventService.createEventType(createEventTypeDto)
  }
}