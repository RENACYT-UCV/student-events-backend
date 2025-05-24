import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { School } from './entities/school.entity'
import { Career } from './entities/career.entity'
import { SchoolService } from './school.service'
import { SchoolController } from './school.controller'

@Module({
  imports: [TypeOrmModule.forFeature([School, Career])],
  providers: [SchoolService],
  controllers: [SchoolController],
  exports: [SchoolService],
})
export class SchoolModule {}
