import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  async create(createMessageDto: any) {
    const message = this.messageRepository.create(createMessageDto);
    return this.messageRepository.save(message);
  }

  async findAll(userId: number, options?: { status?: string }) {
    const where: any = [
      { toUserId: userId },
      { fromUserId: userId, isSystem: true },
    ];

    return this.messageRepository.find({
      where,
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const message = await this.messageRepository.findOne({
      where: { id },
    });
    
    if (!message) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }
    
    return message;
  }

  async markAsRead(id: number) {
    const message = await this.findOne(id);
    message.status = 'read';
    return this.messageRepository.save(message);
  }

  async remove(id: number) {
    const message = await this.findOne(id);
    return this.messageRepository.remove(message);
  }

  async getUnreadCount(userId: number) {
    return this.messageRepository.count({
      where: { toUserId: userId, status: 'unread' },
    });
  }
}
