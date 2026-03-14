import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MarketingCampaign } from './entities/marketing-campaign.entity';

@Injectable()
export class MarketingService {
  constructor(
    @InjectRepository(MarketingCampaign)
    private campaignRepository: Repository<MarketingCampaign>,
  ) {}

  async create(createCampaignDto: any) {
    const campaign = this.campaignRepository.create(createCampaignDto);
    return this.campaignRepository.save(campaign);
  }

  async findAll(options?: { status?: string }) {
    const where: any = {};
    
    if (options?.status) {
      where.status = options.status;
    }

    return this.campaignRepository.find({
      where,
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number) {
    const campaign = await this.campaignRepository.findOne({
      where: { id },
    });
    
    if (!campaign) {
      throw new NotFoundException(`Campaign with ID ${id} not found`);
    }
    
    return campaign;
  }

  async update(id: number, updateCampaignDto: Partial<MarketingCampaign>) {
    const campaign = await this.findOne(id);
    Object.assign(campaign, updateCampaignDto);
    return this.campaignRepository.save(campaign);
  }

  async remove(id: number) {
    const campaign = await this.findOne(id);
    return this.campaignRepository.remove(campaign);
  }

  async getStats() {
    const total = await this.campaignRepository.count();
    const active = await this.campaignRepository.count({ where: { status: 'active' as any } });
    
    const totals = await this.campaignRepository
      .createQueryBuilder('campaign')
      .select('SUM(campaign.budget)', 'totalBudget')
      .addSelect('SUM(campaign.spent)', 'totalSpent')
      .addSelect('SUM(campaign.impressions)', 'totalImpressions')
      .addSelect('SUM(campaign.clicks)', 'totalClicks')
      .addSelect('SUM(campaign.conversions)', 'totalConversions')
      .getRawOne();

    return {
      total,
      active,
      totalBudget: totals?.totalBudget || 0,
      totalSpent: totals?.totalSpent || 0,
      totalImpressions: totals?.totalImpressions || 0,
      totalClicks: totals?.totalClicks || 0,
      totalConversions: totals?.totalConversions || 0,
    };
  }
}
