import { Module } from '@nestjs/common'
import { UserModule } from '@modules/user/user.module'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { MailService } from '../mail/mail.service'

@Module({
  imports: [UserModule],
  providers: [AuthService, MailService],
  controllers: [AuthController],
})
export class AuthModule {}
