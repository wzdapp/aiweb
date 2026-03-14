import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MarketingService } from './marketing.service';

@Controller('marketing')
export class MarketingController {
  constructor(private readonly marketingService: MarketingService) {}

  @Post('campaigns')
  create(@Body() createCampaignDto: any) {
    return this.marketingService.create(createCampaignDto);
  }

  @Get('campaigns')
  findAll(@Query() query: { status?: string }) {
    return this.marketingService.findAll(query);
  }

  @Get('campaigns/stats')
  getStats() {
    return this.marketingService.getStats();
  }

  @Get('campaigns/:id')
  findOne(@Param('id') id: string) {
    return this.marketingService.findOne(+id);
  }

  @Patch('campaigns/:id')
  update(@Param('id') id: string, @Body() updateCampaignDto: any) {
    return this.marketingService.update(+id, updateCampaignDto);
  }

  @Delete('campaigns/:id')
  remove(@Param('id') id: string) {
    return this.marketingService.remove(+id);
  }
}
