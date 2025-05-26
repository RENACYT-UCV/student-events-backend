import { Injectable, NotFoundException } from '@nestjs/common'
import { UserRepository } from './repositories/user.repository'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll() {
    return this.userRepository.findAll()
  }

  findOneById(id: number) {
    return this.userRepository.findOneById(id)
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneByEmail(email)
  }

  async getUserProfile(userId: number) {
    const user = await this.userRepository.findUserById(userId)

    if (!user) {
      throw new NotFoundException('Usuario no encontrado')
    }

    return user
  }

  async getUserEventHistory(userId: number) {
    const user = await this.userRepository.findUserById(userId)
    if (!user) {
      throw new NotFoundException('Usuario no encontrado')
    }
    return this.userRepository.findUserEventHistory(userId)
  }

  createUser(data: CreateUserDto) {
    return this.userRepository.createUser(data)
  }

  updateUser(id: number, data: UpdateUserDto) {
    return this.userRepository.updateUser(id, data)
  }

  deleteUser(id: number) {
    return this.userRepository.deleteUser(id)
  }
}
