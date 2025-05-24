import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Certificate } from './entities/certificate.entity'
import { CreateCertificateDto } from './dto/create-certificate.dto'
import { UpdateCertificateDto } from './dto/update-certificate.dto'

@Injectable()
export class CertificateService {
  constructor(
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
  ) {}

  async create(createCertificateDto: CreateCertificateDto): Promise<Certificate> {
    const certificate = this.certificateRepository.create({
      event: { id: createCertificateDto.eventId },
      assistanceStatus: { id: createCertificateDto.assistanceId },
      history: { id: createCertificateDto.historyId },
    })
    return this.certificateRepository.save(certificate)
  }

  async findAll(): Promise<Certificate[]> {
    return this.certificateRepository.find({ relations: ['event', 'assistanceStatus', 'history'] })
  }

  async findOne(id: number): Promise<Certificate> {
    const certificate = await this.certificateRepository.findOne({
      where: { id },
      relations: ['event', 'assistanceStatus', 'history'],
    })
    if (!certificate) throw new NotFoundException(`Certificate with ID ${id} not found`)
    return certificate
  }

  async update(id: number, updateCertificateDto: UpdateCertificateDto): Promise<Certificate> {
    const certificate = await this.findOne(id)
    Object.assign(certificate, updateCertificateDto)
    return this.certificateRepository.save(certificate)
  }

  async remove(id: number): Promise<void> {
    const result = await this.certificateRepository.delete(id)
    if (result.affected === 0) throw new NotFoundException(`Certificate with ID ${id} not found`)
  }

  async findByUserId(userId: number): Promise<Certificate[]> {
    return this.certificateRepository.find({
      relations: ['event', 'assistanceStatus', 'history', 'history.user'],
      where: {
        history: {
          user: {
            id: userId,
          },
        },
      },
    })
  }
}
