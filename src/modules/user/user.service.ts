import { Injectable } from '@nestjs/common'
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
