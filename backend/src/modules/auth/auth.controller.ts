import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    
    if (!user) {
      return { error: 'Invalid credentials' };
    }
    
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() body: { username: string; email: string; password: string }) {
    try {
      return await this.authService.register(body);
    } catch (error) {
      return { error: error.message };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
