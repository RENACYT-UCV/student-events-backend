import { Body, Controller, Post, Get, Req, UseGuards, Res, Request } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { RegisterDto } from './dto/register.dto'
// import { LoginDto } from './dto/login.dto
import { LocalAuthGuard } from './guards/local-auth.guard'
import { Public } from './decorators/public.decorator'

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/register')
  async register(@Body() data: RegisterDto) {
    return await this.authService.register(data)
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user.id)
  }

  @Public()
  @Post('/forgot-password')
  async forgotPassword(@Body('email') email: string) {
    return this.authService.requestPasswordReset(email)
  }

  @Public()
  @Post('/verify-reset-code')
  async verifyResetCode(@Body('code') code: string) {
    console.log('Código recibido para verificación:', code)
    const result = await this.authService.verifyResetCode(code)
    console.log('Resultado de la verificación:', result)
    return result
  }

  @Get('/google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // Passport will redirect
  }

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    // Here you can handle user info and generate JWT or session
    // For now, just return the user profile
    return res.json(req.user)
  }
}
