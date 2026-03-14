import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createProductDto: any) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async findAll(options?: { categoryId?: number; isActive?: boolean }) {
    const where: any = {};
    
    if (options?.categoryId) {
      where.categoryId = options.categoryId;
    }
    
    if (options?.isActive !== undefined) {
      where.isActive = options.isActive;
    }

    return this.productRepository.find({
      where,
      relations: ['category'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['category'],
    });
    
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    
    return product;
  }

  async findBySlug(slug: string) {
    return this.productRepository.findOne({
      where: { slug },
      relations: ['category'],
    });
  }

  async update(id: number, updateProductDto: Partial<Product>) {
    const product = await this.findOne(id);
    Object.assign(product, updateProductDto);
    return this.productRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    return this.productRepository.remove(product);
  }

  async findFeatured() {
    return this.productRepository.find({
      where: { isFeatured: true, isActive: true },
      relations: ['category'],
      take: 10,
      order: { createdAt: 'DESC' },
    });
  }
}
