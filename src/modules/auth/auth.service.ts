import { BadRequestException, Injectable } from '@nestjs/common'
import bcrypt from 'bcrypt'
import { UserService } from '@modules/user'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import crypto from 'crypto'
import { UpdateUserDto } from '@modules/user/dto/update-user.dto'
import { MailService } from '@modules/mail/mail.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly mailService: MailService,
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

    // Google account validation and verification will be added here

    return {
      userId: user.id,
    }
  }

  async updateUser(id: number, data: UpdateUserDto) {
    return this.userService.updateUser(id, data)
  }

  async requestPasswordReset(email: string) {
    const user = await this.userService.findOneByEmail(email)
    if (!user) {
      throw new BadRequestException('No existe una cuenta con ese correo')
    }

    const token = crypto.randomBytes(32).toString('hex')
    const expires = new Date(Date.now() + 15 * 60 * 1000) // 15 minutos

    await this.userService.updateUser(user.id, {
      resetToken: token,
      resetTokenExpires: expires,
    })

    await this.mailService.sendPasswordReset(email, token)

    return {
      message: 'Se ha enviado un correo con instrucciones para recuperar tu contraseña',
    }
  }
}
