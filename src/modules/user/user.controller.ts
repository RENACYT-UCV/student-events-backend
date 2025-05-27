import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Put,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard'

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUser() {
    return await this.userService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getUserProfile(@Request() req) {
    return this.userService.getUserProfile(req.user.userId)
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return await this.userService.findOneById(id)
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
