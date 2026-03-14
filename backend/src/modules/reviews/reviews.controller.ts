import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(@Body() createReviewDto: any) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get('product/:productId')
  findByProductId(@Param('productId') productId: string) {
    return this.reviewsService.findByProductId(+productId);
  }

  @Get('product/:productId/rating')
  getProductRating(@Param('productId') productId: string) {
    return this.reviewsService.getProductRating(+productId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: any) {
    return this.reviewsService.update(+id, updateReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(+id);
  }

  @Patch(':id/helpful')
  markHelpful(@Param('id') id: string) {
    return this.reviewsService.markHelpful(+id);
  }
}
