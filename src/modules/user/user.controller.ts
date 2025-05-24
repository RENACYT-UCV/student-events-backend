import { Body, Controller, Get, Post, Param, ParseIntPipe, Put, Delete } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

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

  /**
   * This method is only used for testing pipes.
   * In the final implementation, user registration will be handled
   * through authentication.
   * This method will be removed.
   */

  @Get('profile/:id')
  async getUserProfile(@Param('id', ParseIntPipe) userId: number) {
    return await this.userService.getUserProfile(userId)
  }

  @Get(':id/event-history')
  getUserEventHistory(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserEventHistory(id)
  }

  @Post()
  async createUser(@Body() data: CreateUserDto) {
    return await this.userService.createUser(data)
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() data: UpdateUserDto) {
    return await this.userService.updateUser(id, data)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.userService.deleteUser(id)
  }
}
