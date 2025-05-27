import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Event } from './entities/event.entity'
import { EventType } from './entities/event-type.entity'
import { EventDetail } from './entities/event-detail.entity'
import { Registration } from './entities/registration.entity'
import { User } from '@modules/user/entities/user.entity'
import { RegistrationRepository } from './repositories/registration.repository'
import { EventRepository } from './repositories/event.repository'
import { EventTypeRepository } from './repositories/event-type.repository'
import { EventService } from './event.service'
import { EventController } from './event.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Event, EventDetail, EventType, Registration, User])],
  controllers: [EventController],
  providers: [EventService, EventRepository, EventTypeRepository, RegistrationRepository],
  exports: [EventService],
})
export class EventModule {}
