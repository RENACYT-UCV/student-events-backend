import { Module } from '@nestjs/common'
import { envConfig } from '@config/env.config'
import { typeOrmModule } from '@config/database.config'

import { UserModule } from '@modules/user/user.module'

@Module({
  imports: [envConfig(), typeOrmModule(), UserModule],
})
export class AppModule {}
