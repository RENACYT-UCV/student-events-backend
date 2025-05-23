import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcrypt'
import { UserService } from '@modules/user'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { refreshJwtConfig } from './config/refresh-jwt.config'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(refreshJwtConfig.KEY)
    private readonly refreshTokenConfig: ConfigType<typeof refreshJwtConfig>,
  ) {}

  /**
   * This method might not be necessary in the implementation
   */
  async register(data: RegisterDto) {
    const { email, password, ...restData } = data

    const user = await this.userService.findOneByEmail(email)
    if (user) {
      throw new BadRequestException('User alredy exists,')
    }

    await this.userService.createUser({
      ...restData,
      email,
      password: await bcrypt.hash(password, 6),
    })

    return {
      ...restData,
      email,
    }
  }

  async login(data: LoginDto) {
    const { email, password } = data

    const user = await this.userService.findOneByEmail(email)
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid Credentials')
    }

    const payload = { userId: user.id }

    const token = await this.jwtService.signAsync(payload)

    return {
      userId: user.id,
      token,
    }
  }

  private async generateTokens(userId: number) {
    const payload = { userId }

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshTokenConfig),
    ])

    return {
      userId,
      accessToken,
      refreshToken,
    }
  }
}
