import { Module } from '@nestjs/common'
import { envConfig } from '@config/env.config'

@Module({
  imports: [envConfig()],
})
export class AppModule {}
