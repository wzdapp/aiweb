import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  create(@Body() createMessageDto: any) {
    return this.messagesService.create(createMessageDto);
  }

  @Get()
  findAll() {
    // In production, get userId from JWT token
    return this.messagesService.findAll(1);
  }

  @Get('unread-count')
  getUnreadCount() {
    return this.messagesService.getUnreadCount(1);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(+id);
  }

  @Patch(':id/read')
  markAsRead(@Param('id') id: string) {
    return this.messagesService.markAsRead(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(+id);
  }
}
