import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { AnnouncementService } from './announcement.service'
import { CreateAnnouncementDto } from './dto/create-announcement.dto'
import { UpdateAnnouncementDto } from './dto/update-announcement.dto'
import { SendAnnouncementToSchoolDto } from './dto/send-announcement-to-school.dto'

@Controller('announcements')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Post()
  create(@Body() createAnnouncementDto: CreateAnnouncementDto) {
    return this.announcementService.create(createAnnouncementDto)
  }

  @Post('/send-to-school')
  sendToSchool(@Body() sendAnnouncementToSchoolDto: SendAnnouncementToSchoolDto) {
    return this.announcementService.sendAnnouncementToSchool(sendAnnouncementToSchoolDto)
  }

  @Get()
  findAll() {
    return this.announcementService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcementService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnnouncementDto: UpdateAnnouncementDto) {
    return this.announcementService.update(+id, updateAnnouncementDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.announcementService.remove(+id)
  }
}
