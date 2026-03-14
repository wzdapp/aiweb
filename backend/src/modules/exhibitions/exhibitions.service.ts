import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exhibition } from './entities/exhibition.entity';

@Injectable()
export class ExhibitionsService {
  constructor(
    @InjectRepository(Exhibition)
    private exhibitionRepository: Repository<Exhibition>,
  ) {}

  async create(createExhibitionDto: any) {
    const exhibition = this.exhibitionRepository.create(createExhibitionDto);
    return this.exhibitionRepository.save(exhibition);
  }

  async findAll(options?: { status?: string; isActive?: boolean }) {
    const where: any = {};
    
    if (options?.status) {
      where.status = options.status;
    }
    
    if (options?.isActive !== undefined) {
      where.isActive = options.isActive;
    }

    return this.exhibitionRepository.find({
      where,
      order: { startDate: 'DESC' },
    });
  }

  async findOne(id: number) {
    const exhibition = await this.exhibitionRepository.findOne({
      where: { id },
    });
    
    if (!exhibition) {
      throw new NotFoundException(`Exhibition with ID ${id} not found`);
    }
    
    return exhibition;
  }

  async findBySlug(slug: string) {
    return this.exhibitionRepository.findOne({ where: { slug } });
  }

  async update(id: number, updateExhibitionDto: Partial<Exhibition>) {
    const exhibition = await this.findOne(id);
    Object.assign(exhibition, updateExhibitionDto);
    return this.exhibitionRepository.save(exhibition);
  }

  async remove(id: number) {
    const exhibition = await this.findOne(id);
    return this.exhibitionRepository.remove(exhibition);
  }

  async findUpcoming() {
    return this.exhibitionRepository.find({
      where: { 
        status: 'published' as any,
        isActive: true,
      },
      order: { startDate: 'ASC' },
      take: 5,
    });
  }

  async findOngoing() {
    return this.exhibitionRepository.find({
      where: { 
        status: 'ongoing' as any,
        isActive: true,
      },
      order: { startDate: 'DESC' },
    });
  }

  async getStats() {
    const total = await this.exhibitionRepository.count();
    const upcoming = await this.exhibitionRepository.count({ where: { status: 'published' as any } });
    const ongoing = await this.exhibitionRepository.count({ where: { status: 'ongoing' as any } });
    const completed = await this.exhibitionRepository.count({ where: { status: 'completed' as any } });
    
    return {
      total,
      upcoming,
      ongoing,
      completed,
    };
  }
}
