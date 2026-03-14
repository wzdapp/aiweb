import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: any) {
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  async findAll(options?: { status?: string; isActive?: boolean }) {
    const where: any = {};
    
    if (options?.status) {
      where.status = options.status;
    }
    
    if (options?.isActive !== undefined) {
      where.isActive = options.isActive;
    }

    return this.customerRepository.find({
      where,
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const customer = await this.customerRepository.findOne({
      where: { id },
    });
    
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    
    return customer;
  }

  async findByEmail(email: string) {
    return this.customerRepository.findOne({ where: { email } });
  }

  async update(id: number, updateCustomerDto: Partial<Customer>) {
    const customer = await this.findOne(id);
    Object.assign(customer, updateCustomerDto);
    return this.customerRepository.save(customer);
  }

  async remove(id: number) {
    const customer = await this.findOne(id);
    return this.customerRepository.remove(customer);
  }

  async findByStatus(status: string) {
    return this.customerRepository.find({
      where: { status: status as any },
      order: { createdAt: 'DESC' },
    });
  }

  async getStats() {
    const total = await this.customerRepository.count();
    const leads = await this.customerRepository.count({ where: { status: 'lead' as any } });
    const prospects = await this.customerRepository.count({ where: { status: 'prospect' as any } });
    const customers = await this.customerRepository.count({ where: { status: 'customer' as any } });
    
    return {
      total,
      leads,
      prospects,
      customers,
    };
  }
}
