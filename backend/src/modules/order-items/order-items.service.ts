import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './entities/order-item.entity';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
  ) {}

  async create(createOrderItemDto: any) {
    const item = this.orderItemRepository.create(createOrderItemDto);
    return this.orderItemRepository.save(item);
  }

  async findByOrderId(orderId: number) {
    return this.orderItemRepository.find({
      where: { orderId },
      relations: ['product'],
    });
  }

  async findOne(id: number) {
    const item = await this.orderItemRepository.findOne({
      where: { id },
      relations: ['product', 'order'],
    });
    
    if (!item) {
      throw new NotFoundException(`OrderItem with ID ${id} not found`);
    }
    
    return item;
  }

  async remove(id: number) {
    const item = await this.findOne(id);
    return this.orderItemRepository.remove(item);
  }
}
