import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: any) {
    const order = this.orderRepository.create(createOrderDto);
    return this.orderRepository.save(order);
  }

  async findAll(options?: { status?: string; customerId?: number }) {
    const where: any = {};
    
    if (options?.status) {
      where.status = options.status;
    }
    
    if (options?.customerId) {
      where.customerId = options.customerId;
    }

    return this.orderRepository.find({
      where,
      relations: ['customer'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['customer'],
    });
    
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    
    return order;
  }

  async update(id: number, updateOrderDto: Partial<Order>) {
    const order = await this.findOne(id);
    Object.assign(order, updateOrderDto);
    return this.orderRepository.save(order);
  }

  async remove(id: number) {
    const order = await this.findOne(id);
    return this.orderRepository.remove(order);
  }

  async getStats() {
    const total = await this.orderRepository.count();
    const pending = await this.orderRepository.count({ where: { status: 'pending' as any } });
    const processing = await this.orderRepository.count({ where: { status: 'processing' as any } });
    const shipped = await this.orderRepository.count({ where: { status: 'shipped' as any } });
    const delivered = await this.orderRepository.count({ where: { status: 'delivered' as any } });
    
    const revenue = await this.orderRepository
      .createQueryBuilder('order')
      .select('SUM(order.totalAmount)', 'total')
      .where('order.status != :status', { status: 'cancelled' })
      .getRawOne();

    return {
      total,
      pending,
      processing,
      shipped,
      delivered,
      revenue: revenue?.total || 0,
    };
  }
}
