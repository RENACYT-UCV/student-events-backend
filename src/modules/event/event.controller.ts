import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common'
import { EventService } from './event.service'
import { CreateEventDto } from './dto/create-event.dto'
import { CreateEventTypeDto } from './dto/create-event-type.dto'
import { CreateRegistrationDto } from './dto/create-registration.dto'

@Controller('/api/events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  findAllEvents() {
    return this.eventService.findAllEvents()
  }

  @Get('/types')
  findAllEventTypes() {
    return this.eventService.findAllEventTypes()
  }

  @Get(':id')
  findEventById(@Param('id') id: number) {
    return this.eventService.findEventById(id)
  }

  @Get('/types/:id')
  findEventTypeById(@Param('id', ParseIntPipe) id: number) {
    return this.eventService.findEventTypeById(id)
  }

  @Post()
  createEvent(@Body() createEventDto: CreateEventDto) {
    return this.eventService.createEvent(createEventDto)
  }

  @Post('/types')
  createEventType(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventService.createEventType(createEventTypeDto)
  }

  @Post('/register/:userId')
  createRegistration(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() createRegistrationDto: CreateRegistrationDto,
  ) {
    return this.eventService.createRegistration({ ...createRegistrationDto, userId })
  }
}
