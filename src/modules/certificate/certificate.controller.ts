import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common'
import { CertificateService } from './certificate.service'
import { CreateCertificateDto } from './dto/create-certificate.dto'
import { UpdateCertificateDto } from './dto/update-certificate.dto'

@Controller('certificates')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Post()
  create(@Body() createCertificateDto: CreateCertificateDto) {
    return this.certificateService.create(createCertificateDto)
  }

  @Get()
  findAll() {
    return this.certificateService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificateService.findOne(Number(id))
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string) {
    return this.certificateService.findByUserId(Number(userId))
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCertificateDto: UpdateCertificateDto) {
    return this.certificateService.update(Number(id), updateCertificateDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificateService.remove(Number(id))
  }
}
