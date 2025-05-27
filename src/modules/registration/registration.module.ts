import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Registration } from '../event/entities/registration.entity'
import { RegistrationService } from './registration.service'
import { RegistrationController } from './registration.controller'
import { RegistrationRepository } from './registration.repository'
import { Event } from '../event/entities/event.entity'
import { User } from '../user/entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Registration, Event, User])],
  controllers: [RegistrationController],
  providers: [RegistrationService, RegistrationRepository],
  exports: [RegistrationService, RegistrationRepository],
})
export class RegistrationModule {}
