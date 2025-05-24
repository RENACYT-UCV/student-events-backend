import { Injectable, NotFoundException } from '@nestjs/common'
import { UserRepository } from './repositories/user.repository'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * This method is only used for testing pipes.
   * In the final implementation, user registration will be handled
   * through authentication.
   * This method will be removed.
   */
  createUser(data: CreateUserDto) {
    return this.userRepository.createUser(data)
  }

  async getUserProfile(userId: number) {
    const user = await this.userRepository.findUserById(userId);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return user;
  }
}
