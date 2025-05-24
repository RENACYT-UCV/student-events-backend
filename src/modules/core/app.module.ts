import { Module } from '@nestjs/common'
import { envConfig } from '@config/env.config'
import { typeOrmModule } from '@config/database.config'

import { AuthModule } from '@modules/auth/auth.module'
import { UserModule } from '@modules/user/user.module'
import { EventModule } from '@modules/event/event.module'
import { SurveyModule } from '@modules/survey/survey.module'
import { PdfModule } from '@modules/pdf/pdf.module'

@Module({
  imports: [
    envConfig(),
    typeOrmModule(),
    AuthModule,
    UserModule,
    EventModule,
    SurveyModule,
    SurveyModule,
    PdfModule,
  ],
})
export class AppModule {}
