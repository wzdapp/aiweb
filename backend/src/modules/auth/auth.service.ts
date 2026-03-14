import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    
    if (user && await bcrypt.compare(password, user.passwordHash)) {
      const { passwordHash, ...result } = user;
      return result;
    }
    
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
  }

  async register(userDto: { username: string; email: string; password: string }) {
    // Check if user exists
    const existingUser = await this.usersService.findByEmail(userDto.email);
    
    if (existingUser) {
      throw new UnauthorizedException('Email already exists');
    }
    
    // Create new user
    const user = await this.usersService.create({
      ...userDto,
      role: 'viewer',
    });
    
    // Generate token
    return this.login(user);
  }
}
