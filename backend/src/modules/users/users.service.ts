import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

interface CreateUserDto {
  username: string;
  email: string;
  password: string;
  role?: string;
}

interface UpdateUserDto {
  username?: string;
  email?: string;
  password?: string;
  role?: string;
  isActive?: boolean;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.userRepository.create({
      username: createUserDto.username,
      email: createUserDto.email,
      passwordHash: hashedPassword,
      role: (createUserDto.role || 'viewer') as 'admin' | 'manager' | 'sales' | 'viewer',
    });
    return this.userRepository.save(user);
  }

  async findAll() {
    return this.userRepository.find({
      select: ['id', 'username', 'email', 'role', 'isActive', 'lastLoginAt', 'createdAt', 'updatedAt'],
    });
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      select: ['id', 'username', 'email', 'role', 'isActive', 'lastLoginAt', 'createdAt', 'updatedAt'],
    });
    
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    
    return user;
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    
    if (updateUserDto.password) {
      (user as any).passwordHash = await bcrypt.hash(updateUserDto.password, 10);
      delete updateUserDto.password;
    }
    
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.userRepository.remove(user);
  }

  async findByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }
}
