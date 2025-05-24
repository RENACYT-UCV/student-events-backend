import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common'
import { SchoolService } from './school.service'
import { CreateSchoolDto } from './dto/create-school.dto'
import { UpdateSchoolDto } from './dto/update-school.dto'
import { CreateCareerDto } from './dto/create-career.dto'
import { UpdateCareerDto } from './dto/update-career.dto'

@Controller('schools')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  // School endpoints
  @Post()
  createSchool(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.createSchool(createSchoolDto)
  }

  @Get()
  findAllSchools() {
    return this.schoolService.findAllSchools()
  }

  @Get(':id')
  findSchoolById(@Param('id') id: string) {
    return this.schoolService.findSchoolById(Number(id))
  }

  @Patch(':id')
  updateSchool(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolService.updateSchool(Number(id), updateSchoolDto)
  }

  @Delete(':id')
  removeSchool(@Param('id') id: string) {
    return this.schoolService.removeSchool(Number(id))
  }

  // Career endpoints
  @Post(':schoolId/careers')
  createCareer(@Param('schoolId') schoolId: string, @Body() createCareerDto: CreateCareerDto) {
    return this.schoolService.createCareer({ ...createCareerDto, schoolId: Number(schoolId) })
  }

  @Get(':schoolId/careers')
  findCareersBySchool(@Param('schoolId') schoolId: string) {
    return this.schoolService
      .findAllCareers()
      .then(careers => careers.filter(c => c.school.id === Number(schoolId)))
  }

  @Get('/careers/:id')
  findCareerById(@Param('id') id: string) {
    return this.schoolService.findCareerById(Number(id))
  }

  @Patch('/careers/:id')
  updateCareer(@Param('id') id: string, @Body() updateCareerDto: UpdateCareerDto) {
    return this.schoolService.updateCareer(Number(id), updateCareerDto)
  }

  @Delete('/careers/:id')
  removeCareer(@Param('id') id: string) {
    return this.schoolService.removeCareer(Number(id))
  }
}
