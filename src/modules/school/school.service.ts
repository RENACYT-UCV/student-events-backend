import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { School } from './entities/school.entity'
import { Career } from './entities/career.entity'
import { CreateSchoolDto } from './dto/create-school.dto'
import { UpdateSchoolDto } from './dto/update-school.dto'
import { CreateCareerDto } from './dto/create-career.dto'
import { UpdateCareerDto } from './dto/update-career.dto'

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>,
    @InjectRepository(Career)
    private readonly careerRepository: Repository<Career>,
  ) {}

  // School methods
  async createSchool(createSchoolDto: CreateSchoolDto): Promise<School> {
    const school = this.schoolRepository.create(createSchoolDto)
    return this.schoolRepository.save(school)
  }

  async findAllSchools(): Promise<School[]> {
    return this.schoolRepository.find({ relations: ['careers'] })
  }

  async findSchoolById(id: number): Promise<School> {
    const school = await this.schoolRepository.findOne({ where: { id }, relations: ['careers'] })
    if (!school) throw new NotFoundException(`School with ID ${id} not found`)
    return school
  }

  async updateSchool(id: number, updateSchoolDto: UpdateSchoolDto): Promise<School> {
    const school = await this.findSchoolById(id)
    Object.assign(school, updateSchoolDto)
    return this.schoolRepository.save(school)
  }

  async removeSchool(id: number): Promise<void> {
    const result = await this.schoolRepository.delete(id)
    if (result.affected === 0) throw new NotFoundException(`School with ID ${id} not found`)
  }

  // Career methods
  async createCareer(createCareerDto: CreateCareerDto): Promise<Career> {
    const { name, schoolId } = createCareerDto
    const school = await this.findSchoolById(schoolId)
    const career = this.careerRepository.create({ name, school })
    return this.careerRepository.save(career)
  }

  async findAllCareers(): Promise<Career[]> {
    return this.careerRepository.find({ relations: ['school'] })
  }

  async findCareerById(id: number): Promise<Career> {
    const career = await this.careerRepository.findOne({ where: { id }, relations: ['school'] })
    if (!career) throw new NotFoundException(`Career with ID ${id} not found`)
    return career
  }

  async updateCareer(id: number, updateCareerDto: UpdateCareerDto): Promise<Career> {
    const career = await this.findCareerById(id)
    Object.assign(career, updateCareerDto)
    return this.careerRepository.save(career)
  }

  async removeCareer(id: number): Promise<void> {
    const result = await this.careerRepository.delete(id)
    if (result.affected === 0) throw new NotFoundException(`Career with ID ${id} not found`)
  }
}
