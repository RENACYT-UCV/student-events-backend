import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { AssistanceService } from './assistance.service'
import { CreateAssistanceDto } from './dto/create-assistance.dto'
import { UpdateAssistanceDto } from './dto/update-assistance.dto'

@Controller('assistance')
export class AssistanceController {
  constructor(private readonly assistanceService: AssistanceService) {}

  @Post()
  create(@Body() createAssistanceDto: CreateAssistanceDto) {
    return this.assistanceService.create(createAssistanceDto)
  }

  @Get()
  findAll() {
    return this.assistanceService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assistanceService.findOne(Number(id))
  }

  @Post('mark')
  registerUserAssistance(@Body() createAssistanceDto: CreateAssistanceDto) {
    return this.assistanceService.registerUserAssistance(createAssistanceDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssistanceDto: UpdateAssistanceDto) {
    return this.assistanceService.update(Number(id), updateAssistanceDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assistanceService.remove(Number(id))
  }
}
