import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  company: string | null;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  country: string | null;

  @Column({ type: 'text', nullable: true })
  address: string | null;

  @Column({
    type: 'enum',
    enum: ['lead', 'prospect', 'customer', 'inactive'],
    default: 'lead',
  })
  status: 'lead' | 'prospect' | 'customer' | 'inactive';

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0, name: 'total_revenue' })
  totalRevenue: number;

  @Column({ type: 'int', default: 0, name: 'order_count' })
  orderCount: number;

  @Column({ type: 'text', nullable: true })
  notes: string | null;

  @Column({ type: 'json', nullable: true })
  tags: string[] | null;

  @Column({ type: 'tinyint', width: 1, default: 1, name: 'is_active' })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
