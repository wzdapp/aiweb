import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead } from './entities/lead.entity';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Lead)
    private leadRepository: Repository<Lead>,
  ) {}

  async create(createLeadDto: any) {
    const lead = this.leadRepository.create(createLeadDto);
    return this.leadRepository.save(lead);
  }

  async findAll(options?: { status?: string; isActive?: boolean }) {
    const where: any = {};
    
    if (options?.status) {
      where.status = options.status;
    }
    
    if (options?.isActive !== undefined) {
      where.isActive = options.isActive;
    }

    return this.leadRepository.find({
      where,
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const lead = await this.leadRepository.findOne({
      where: { id },
    });
    
    if (!lead) {
      throw new NotFoundException(`Lead with ID ${id} not found`);
    }
    
    return lead;
  }

  async update(id: number, updateLeadDto: Partial<Lead>) {
    const lead = await this.findOne(id);
    Object.assign(lead, updateLeadDto);
    return this.leadRepository.save(lead);
  }

  async remove(id: number) {
    const lead = await this.findOne(id);
    return this.leadRepository.remove(lead);
  }

  async findByStatus(status: string) {
    return this.leadRepository.find({
      where: { status: status as any },
      order: { createdAt: 'DESC' },
    });
  }

  async getStats() {
    const total = await this.leadRepository.count();
    const newLeads = await this.leadRepository.count({ where: { status: 'new' as any } });
    const contacted = await this.leadRepository.count({ where: { status: 'contacted' as any } });
    const qualified = await this.leadRepository.count({ where: { status: 'qualified' as any } });
    const converted = await this.leadRepository.count({ where: { status: 'converted' as any } });
    const lost = await this.leadRepository.count({ where: { status: 'lost' as any } });
    
    const avgScore = await this.leadRepository
      .createQueryBuilder('lead')
      .select('AVG(lead.score)', 'avg')
      .getRawOne();

    return {
      total,
      new: newLeads,
      contacted,
      qualified,
      converted,
      lost,
      averageScore: avgScore?.avg || 0,
    };
  }
}
