import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketingController } from './marketing.controller';
import { MarketingService } from './marketing.service';
import { MarketingCampaign } from './entities/marketing-campaign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MarketingCampaign])],
  controllers: [MarketingController],
  providers: [MarketingService],
  exports: [MarketingService],
})
export class MarketingModule {}
