import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find()
  }

  findOneById(id: number) {
    return this.userRepository.findOne({ where: { id } })
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } })
  }

  findOne(options: any) {
    return this.userRepository.findOne(options)
  }

  /**
   * This method is only used for testing pipes.
   * In the final implementation, user registration will be handled
   * through authentication.
   * This method will be removed.
   */

  async findUserById(id: number) {
    return this.userRepository.findOne({
      where: { id },
      select: ['id', 'name', 'lastName', 'email'],
    })
  }

  async findUserEventHistory(id: number) {
    return this.userRepository.manager.getRepository('Registration').find({
      where: {
        user: { id: id },
      },
      relations: ['event', 'event.eventDetails', 'assistances'],
      order: {
        event: {
          eventDetails: {
            startDate: 'DESC',
          },
        },
      },
    })
  }

  createUser(data: CreateUserDto) {
    const user = this.userRepository.create(data)
    return this.userRepository.save(user)
  }

  async updateUser(id: number, data: UpdateUserDto) {
    await this.userRepository.update(id, data)
    return this.userRepository.findOne({ where: { id } })
  }

  async deleteUser(id: number) {
    await this.userRepository.delete(id)
    return { deleted: true }
  }

  findBySchoolId(schoolId: number) {
    return this.userRepository.find({ where: { school: { id: schoolId } } })
  }
}
