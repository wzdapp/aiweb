import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity';
import { OrderItem } from '../../order-items/entities/order-item.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  orderNumber: string;

  @Column({ type: 'int', unsigned: true, name: 'customer_id' })
  customerId: number;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(() => OrderItem, item => item.order)
  items: OrderItem[];

  @Column({
    type: 'enum',
    enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  })
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

  @Column({ type: 'decimal', precision: 12, scale: 2, name: 'subtotal_amount' })
  subtotalAmount: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, name: 'tax_amount', default: 0 })
  taxAmount: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, name: 'shipping_amount', default: 0 })
  shippingAmount: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, name: 'total_amount' })
  totalAmount: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  shippingAddress: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  shippingCity: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  shippingCountry: string | null;

  @Column({ type: 'varchar', length: 20, nullable: true })
  shippingPhone: string | null;

  @Column({ type: 'text', nullable: true })
  notes: string | null;

  @Column({ type: 'datetime', nullable: true, name: 'shipped_at' })
  shippedAt: Date | null;

  @Column({ type: 'datetime', nullable: true, name: 'delivered_at' })
  deliveredAt: Date | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
