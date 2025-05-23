import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from '@modules/user/user.module'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
// import { APP_GUARD } from '@nestjs/core'
import { googleOAuthConfig } from './config/google-oauth.config'
import { jwtConfig } from './config/jwt.config'
import { refreshJwtConfig } from './config/refresh-jwt.config'

@Module({
  imports: [
    UserModule,
    ConfigModule.forFeature(googleOAuthConfig),
    ConfigModule.forFeature(jwtConfig),
    ConfigModule.forFeature(refreshJwtConfig),
  ],
  providers: [
    AuthService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
