import { Module } from '@nestjs/common'
import { UserModule } from '@modules/user/user.module'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { MailService } from '../mail/mail.service'
import { GoogleStrategy } from './strategies/google.strategy'
import { PassportModule } from '@nestjs/passport'

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, MailService, GoogleStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
