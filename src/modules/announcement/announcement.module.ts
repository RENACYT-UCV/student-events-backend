import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AnnouncementService } from './announcement.service'
import { AnnouncementController } from './announcement.controller'
import { Announcement } from './entities/announcement.entity'
import { UserModule } from '../user/user.module'

@Module({
  imports: [TypeOrmModule.forFeature([Announcement]), UserModule],
  controllers: [AnnouncementController],
  providers: [AnnouncementService],
  exports: [AnnouncementService],
})
export class AnnouncementModule {}
