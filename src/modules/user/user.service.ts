import { Injectable, NotFoundException } from '@nestjs/common'
import { UserRepository } from './repositories/user.repository'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll() {
    return this.userRepository.findAll()
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneByEmail(email)
  }

  /**
   * This method is only used for testing pipes.
   * In the final implementation, user registration will be handled
   * through authentication.
   * This method will be removed.
   */
  async getUserProfile(userId: number) {
    const user = await this.userRepository.findUserById(userId);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return user;
  }

  async getUserEventHistory(userId: number) {
    const user = await this.userRepository.findUserById(userId);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return this.userRepository.findUserEventHistory(userId);
  }




  createUser(data: CreateUserDto) {
    return this.userRepository.createUser(data)
  }
}
