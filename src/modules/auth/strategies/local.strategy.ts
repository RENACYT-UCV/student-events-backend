import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from '../auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email',
    })
  }

  validate(email: string) {
    // console.log(email)
    return this.authService.validateUser({ email })
    // if (!user) {
    //   throw new UnauthorizedException()
    // }
  }
}
