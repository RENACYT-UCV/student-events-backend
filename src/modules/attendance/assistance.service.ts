import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Assistance } from './entities/assistance.entity'
import { CreateAssistanceDto } from './dto/create-assistance.dto'
import { UpdateAssistanceDto } from './dto/update-assistance.dto'

@Injectable()
export class AssistanceService {
  constructor(
    @InjectRepository(Assistance)
    private assistanceRepository: Repository<Assistance>,
  ) {}

  async create(createAssistanceDto: CreateAssistanceDto): Promise<Assistance> {
    const assistance = this.assistanceRepository.create(createAssistanceDto)
    return this.assistanceRepository.save(assistance)
  }

  async findAll(): Promise<Assistance[]> {
    return this.assistanceRepository.find()
  }

  async findOne(id: number): Promise<Assistance> {
    const assistance = await this.assistanceRepository.findOne({ where: { id } })
    if (!assistance) {
      throw new NotFoundException(`Assistance with ID ${id} not found`)
    }
    return assistance
  }

  async update(id: number, updateAssistanceDto: UpdateAssistanceDto): Promise<Assistance> {
    const assistance = await this.findOne(id)
    this.assistanceRepository.merge(assistance, updateAssistanceDto)
    return this.assistanceRepository.save(assistance)
  }

  async remove(id: number): Promise<void> {
    const result = await this.assistanceRepository.delete(id)
    if (result.affected === 0) {
      throw new NotFoundException(`Assistance with ID ${id} not found`)
    }
  }
}
