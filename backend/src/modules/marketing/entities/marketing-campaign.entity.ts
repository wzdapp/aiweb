import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('marketing_campaigns')
export class MarketingCampaign {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({
    type: 'enum',
    enum: ['draft', 'scheduled', 'active', 'paused', 'completed', 'cancelled'],
    default: 'draft',
  })
  status: 'draft' | 'scheduled' | 'active' | 'paused' | 'completed' | 'cancelled';

  @Column({ type: 'datetime', nullable: true, name: 'start_date' })
  startDate: Date | null;

  @Column({ type: 'datetime', nullable: true, name: 'end_date' })
  endDate: Date | null;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0, name: 'budget' })
  budget: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0, name: 'spent' })
  spent: number;

  @Column({ type: 'int', default: 0, name: 'impressions' })
  impressions: number;

  @Column({ type: 'int', default: 0, name: 'clicks' })
  clicks: number;

  @Column({ type: 'int', default: 0, name: 'conversions' })
  conversions: number;

  @Column({ type: 'json', nullable: true })
  channels: string[] | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
