import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AssistanceService } from './assistance.service'
import { AssistanceController } from './assistance.controller'
import { Assistance } from './entities/assistance.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Assistance])],
  controllers: [AssistanceController],
  providers: [AssistanceService],
})
export class AssistanceModule {}
