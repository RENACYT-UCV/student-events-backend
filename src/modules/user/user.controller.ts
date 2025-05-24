import { Body, Controller, Get, Post, Param, ParseIntPipe, NotFoundException } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUser() {
    // return await this.userService.
  }

  @Get('profile/:id')
  async getUserProfile(@Param('id', ParseIntPipe) userId: number) {
    return await this.userService.getUserProfile(userId);
  }

  /**
   * This method is only used for testing pipes.
   * In the final implementation, user registration will be handled
   * through authentication.
   * This method will be removed.
   */
  @Post()
  async createUser(@Body() data: CreateUserDto) {
    return await this.userService.createUser(data)
  }
}
