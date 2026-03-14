import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { MarketingModule } from '../marketing/marketing.module';
import { OrdersModule } from '../orders/orders.module';
import { CustomersModule } from '../customers/customers.module';
import { LeadsModule } from '../leads/leads.module';
import { ProductsModule } from '../products/products.module';
import { ExhibitionsModule } from '../exhibitions/exhibitions.module';

@Module({
  imports: [
    MarketingModule,
    OrdersModule,
    CustomersModule,
    LeadsModule,
    ProductsModule,
    ExhibitionsModule,
  ],
  controllers: [AnalyticsController],
})
export class AnalyticsModule {}
