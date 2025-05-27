import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcrypt'
import { UserService } from '@modules/user'
import { UpdateUserDto } from '@modules/user/dto/update-user.dto'
import { MailService } from '@modules/mail/mail.service'
import { RegisterDto } from './dto/register.dto'
//import { LoginDto } from './dto/login.dto'

import { refreshJwtConfig } from './config/refresh-jwt.config'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly mailService: MailService,
    private readonly jwtService: JwtService,
    @Inject(refreshJwtConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshJwtConfig>,
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

  // async login(data: LoginDto) {
  //   const { email } = data

  //   const user = await this.userService.findOneByEmail(email)
  //   if (!user) {
  //     throw new BadRequestException('Invalid Credentials')
  //   }

  //   const { accessToken, refreshToken } = await this.generateTokens(user.id)

  //   return {
  //     userId: user.id,
  //     accessToken,
  //     refreshToken,
  //   }
  // }

  async login(userId: number) {
    const { accessToken, refreshToken } = await this.generateTokens(userId)

    return {
      userId,
      accessToken,
      refreshToken,
    }
  }

  async getProfile(userId: number) {
    const user = await this.userService.getUserProfile(userId)
    if (!user) {
      throw new UnauthorizedException('User not found!')
    }
    return user
  }

  async updateUser(id: number, data: UpdateUserDto) {
    return this.userService.updateUser(id, data)
  }

  async requestPasswordReset(email: string) {
    const user = await this.userService.findOneByEmail(email)
    if (!user) {
      throw new BadRequestException('No existe una cuenta con ese correo')
    }

    // Generar un código numérico de 6 dígitos
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    const expires = new Date(Date.now() + 15 * 60 * 1000) // 15 minutos

    await this.userService.updateUser(user.id, {
      resetToken: code,
      resetTokenExpires: expires,
    })

    await this.mailService.sendPasswordReset(email, user.username, code)

    return {
      message: 'Se ha enviado un correo con instrucciones para recuperar tu contraseña',
    }
  }

  async generateTokens(userId: number) {
    const payload: { userId: number; sub: number } = {
      userId,
      sub: userId,
    }

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshTokenConfig),
    ])

    return {
      accessToken,
      refreshToken,
    }
  }

  async validateUser({ email }: { email: string; password?: string }) {
    const user = await this.userService.findOneByEmail(email)
    if (!user) {
      throw new BadRequestException('Invalid Credentials')
    }

    // TODO: Integrate with the user service to validate the password
    // const isPasswordValid = await bcrypt.compare(password, user.password)
    // if (!isPasswordValid) {
    // return null
    // }

    return user
  }

  async validateJwtUser(userId: number) {
    const user = await this.userService.findOneById(userId)
    if (!user) throw new UnauthorizedException('User not found!')
    const currentUser: { userId: number } = { userId }
    return currentUser
  }

  async verifyResetCode(code: string) {
    const user = await this.userService.findOneByResetToken(code)
    if (!user || user.resetTokenExpires < new Date()) {
      throw new BadRequestException('Código inválido o expirado')
    }

    // Clear the reset token and expiration
    await this.userService.updateUser(user.id, {
      resetToken: undefined,
      resetTokenExpires: undefined,
    })

    return {
      message: 'Código verificado correctamente',
      token: user.resetToken,
    }
  }
}
