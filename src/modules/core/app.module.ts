import { Module } from '@nestjs/common'
import { envConfig } from '@config/env.config'
import { typeOrmModule } from '@config/database.config'

import { AuthModule } from '@modules/auth/auth.module'
import { UserModule } from '@modules/user/user.module'
import { EventModule } from '@modules/event/event.module'
import { SurveyModule } from '@modules/survey/survey.module'
import { PdfModule } from '@modules/pdf/pdf.module'
import { AnnouncementModule } from '@modules/announcement/announcement.module'
import { AssistanceModule } from '@modules/attendance/assistance.module'
import { SchoolModule } from '@modules/school/school.module'
import { CertificateModule } from '@modules/certificate/certificate.module'
import { RegistrationModule } from '../registration/registration.module'

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
    AnnouncementModule,
    AssistanceModule,
    SchoolModule,
    SurveyModule,
    CertificateModule,
    RegistrationModule,
  ],
})
export class AppModule {}
