import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common'
import { RegistrationService } from './registration.service'
import { CreateRegistrationDto } from './dto/create-registration.dto'

@Controller('api/registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  create(@Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationService.create(createRegistrationDto)
  }

  @Get(':userId/:eventId')
  findOneByUserIdAndEventId(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('eventId', ParseIntPipe) eventId: number,
  ) {
    return this.registrationService.findOneByUserIdAndEventId(userId, eventId)
  }
}
