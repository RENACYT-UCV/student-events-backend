import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from '@modules/user/user.module'
import { MailService } from '../mail/mail.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { jwtConfig } from './config/jwt.config'
import { refreshJwtConfig } from './config/refresh-jwt.config'
import { GoogleStrategy } from './strategies/google.strategy'
import { LocalStrategy } from './strategies/local.strategy'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './guards/jwt-auth.guard'

@Module({
  imports: [
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig),
    ConfigModule.forFeature(refreshJwtConfig),
    UserModule,
    PassportModule,
  ],
  providers: [
    AuthService,
    MailService,
    GoogleStrategy,
    LocalStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
