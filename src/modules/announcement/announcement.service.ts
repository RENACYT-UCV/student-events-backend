import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Announcement } from './entities/announcement.entity'
import { CreateAnnouncementDto } from './dto/create-announcement.dto'
import { UpdateAnnouncementDto } from './dto/update-announcement.dto'
import { SendAnnouncementToSchoolDto } from './dto/send-announcement-to-school.dto'
import { UserRepository } from '../user/repositories/user.repository'

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectRepository(Announcement)
    private announcementRepository: Repository<Announcement>,
    private readonly userRepository: UserRepository,
    // Inject MailService here if needed
  ) {}

  async create(createAnnouncementDto: CreateAnnouncementDto): Promise<Announcement> {
    const announcement = this.announcementRepository.create(createAnnouncementDto)
    return this.announcementRepository.save(announcement)
  }

  async findAll(): Promise<Announcement[]> {
    return this.announcementRepository.find()
  }

  async findOne(id: number): Promise<Announcement> {
    const announcement = await this.announcementRepository.findOne({ where: { id } })
    if (!announcement) {
      throw new NotFoundException(`Announcement with ID ${id} not found`)
    }
    return announcement
  }

  async update(id: number, updateAnnouncementDto: UpdateAnnouncementDto): Promise<Announcement> {
    const announcement = await this.findOne(id)
    this.announcementRepository.merge(announcement, updateAnnouncementDto)
    return this.announcementRepository.save(announcement)
  }

  async remove(id: number): Promise<void> {
    const result = await this.announcementRepository.delete(id)
    if (result.affected === 0) {
      throw new NotFoundException(`Announcement with ID ${id} not found`)
    }
  }

  async sendAnnouncementToSchool(
    sendAnnouncementToSchoolDto: SendAnnouncementToSchoolDto,
  ): Promise<void> {
    const { schoolId, title, message, date, type } = sendAnnouncementToSchoolDto

    // Find all users belonging to the specified school
    const users = await this.userRepository.findBySchoolId(schoolId)

    // Create the announcement entity (optional, depending on whether you want to save this announcement)
    const announcement = this.announcementRepository.create({ title, message, date, type })
    // await this.announcementRepository.save(announcement); // Uncomment if you want to save the announcement

    // TODO: Implement sending the announcement to each user (e.g., via email, push notification, in-app message)
    console.log(`Sending announcement to ${users.length} users in school ${schoolId}`)
    // Example: Iterate through users and send email using a MailService
    // for (const user of users) {
    //   await this.mailService.sendAnnouncement(user.email, title, message);
    // }
  }
}
