import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUser() {
    return await this.userService.findAll()
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return await this.userService.findOneById(id)
  }

  @Post()
  async createUser(@Body() data: CreateUserDto) {
    return await this.userService.createUser(data)
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() data) {
    return await this.userService.updateUser(id, data)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.userService.deleteUser(id)
  }
}
