import { BadRequestException, Injectable } from '@nestjs/common'
import bcrypt from 'bcrypt'
import { UserService } from '@modules/user'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

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
}
