import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async create(createReviewDto: any) {
    const review = this.reviewRepository.create(createReviewDto);
    return this.reviewRepository.save(review);
  }

  async findByProductId(productId: number) {
    return this.reviewRepository.find({
      where: { productId, isVisible: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const review = await this.reviewRepository.findOne({
      where: { id },
    });
    
    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    
    return review;
  }

  async update(id: number, updateReviewDto: Partial<Review>) {
    const review = await this.findOne(id);
    Object.assign(review, updateReviewDto);
    return this.reviewRepository.save(review);
  }

  async remove(id: number) {
    const review = await this.findOne(id);
    return this.reviewRepository.remove(review);
  }

  async markHelpful(id: number) {
    const review = await this.findOne(id);
    review.helpful += 1;
    return this.reviewRepository.save(review);
  }

  async getProductRating(productId: number) {
    const result = await this.reviewRepository
      .createQueryBuilder('review')
      .where('review.productId = :productId', { productId })
      .andWhere('review.isVisible = :isVisible', { isVisible: true })
      .select('AVG(review.rating)', 'average')
      .addSelect('COUNT(review.id)', 'count')
      .getRawOne();

    return {
      average: parseFloat(result?.average || 0).toFixed(1),
      count: parseInt(result?.count || 0),
    };
  }
}
