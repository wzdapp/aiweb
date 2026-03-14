import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('exhibitions')
export class Exhibition {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nameEn: string | null;

  @Column({ type: 'varchar', length: 255, unique: true })
  slug: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'text', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'varchar', length: 100 })
  location: string;

  @Column({ type: 'datetime', name: 'start_date' })
  startDate: Date;

  @Column({ type: 'datetime', name: 'end_date' })
  endDate: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  venue: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  boothSize: string | null;

  @Column({
    type: 'enum',
    enum: ['draft', 'published', 'ongoing', 'completed', 'cancelled'],
    default: 'draft',
  })
  status: 'draft' | 'published' | 'ongoing' | 'completed' | 'cancelled';

  @Column({ type: 'int', default: 0, name: 'expected_visitors' })
  expectedVisitors: number;

  @Column({ type: 'int', default: 0, name: 'actual_visitors' })
  actualVisitors: number;

  @Column({ type: 'int', default: 0, name: 'lead_count' })
  leadCount: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0, name: 'budget' })
  budget: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0, name: 'actual_cost' })
  actualCost: number;

  @Column({ type: 'json', nullable: true })
  images: string[] | null;

  @Column({ type: 'tinyint', width: 1, default: 1, name: 'is_active' })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
