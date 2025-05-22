import { Module } from '@nestjs/common'
import { envConfig } from '@config/env.config'
import { typeOrmModule } from '@config/database.config'

import { UserModule } from '@modules/user/user.module'
import { EventModule } from '@modules/event/event.module'
import { SurveyModule } from '@modules/survey/survey.module'

@Module({
  imports: [envConfig(), typeOrmModule(), UserModule, EventModule, SurveyModule],
})
export class AppModule {}
