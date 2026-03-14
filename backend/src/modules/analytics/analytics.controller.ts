import { Controller, Get, Query } from '@nestjs/common';
import { MarketingService } from '../marketing/marketing.service';
import { OrdersService } from '../orders/orders.service';
import { CustomersService } from '../customers/customers.service';
import { LeadsService } from '../leads/leads.service';
import { ProductsService } from '../products/products.service';
import { ExhibitionsService } from '../exhibitions/exhibitions.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(
    private marketingService: MarketingService,
    private ordersService: OrdersService,
    private customersService: CustomersService,
    private leadsService: LeadsService,
    private productsService: ProductsService,
    private exhibitionsService: ExhibitionsService,
  ) {}

  @Get('overview')
  async getOverview() {
    const [orders, customers, leads, products, exhibitions, marketing] = await Promise.all([
      this.ordersService.getStats(),
      this.customersService.getStats(),
      this.leadsService.getStats(),
      this.productsService.findAll({ isActive: true }),
      this.exhibitionsService.getStats(),
      this.marketingService.getStats(),
    ]);

    return {
      orders,
      customers,
      leads,
      products: {
        total: products.length,
      },
      exhibitions,
      marketing,
    };
  }

  @Get('sales')
  async getSales(@Query() query: { period?: string }) {
    // Mock sales data - in production, this would query actual data
    const period = query.period || 'month';
    
    const data = {
      labels: period === 'week' 
        ? ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      values: period === 'week'
        ? [12000, 15000, 18000, 14000, 20000, 25000, 22000]
        : [45000, 52000, 48000, 61000, 55000, 72000, 68000, 75000, 80000, 85000, 92000, 98000],
    };

    return {
      period,
      data,
      total: data.values.reduce((a, b) => a + b, 0),
      growth: 15.8,
    };
  }

  @Get('customers')
  async getCustomerAnalytics(@Query() query: { period?: string }) {
    const customers = await this.customersService.getStats();
    const leads = await this.leadsService.getStats();

    return {
      customers,
      leads,
      conversionRate: customers.total > 0 
        ? ((leads.converted / leads.total) * 100).toFixed(1)
        : 0,
    };
  }

  @Get('products')
  async getProductAnalytics() {
    const products = await this.productsService.findAll({ isActive: true });
    const featured = await this.productsService.findFeatured();

    return {
      total: products.length,
      featured: featured.length,
      categories: 8, // Mock category count
    };
  }

  @Get('exhibitions')
  async getExhibitionAnalytics() {
    const exhibitions = await this.exhibitionsService.getStats();
    const upcoming = await this.exhibitionsService.findUpcoming();

    return {
      ...exhibitions,
      upcomingCount: upcoming.length,
    };
  }
}
