import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ type: 'int', unsigned: true, name: 'product_id' })
  productId: number;

  @Column({ type: 'int', unsigned: true, name: 'user_id' })
  userId: number;

  @Column({ type: 'int', default: 5 })
  rating: number;

  @Column({ type: 'text', nullable: true })
  title: string | null;

  @Column({ type: 'text', nullable: true })
  content: string | null;

  @Column({ type: 'boolean', default: true, name: 'is_visible' })
  isVisible: boolean;

  @Column({ type: 'int', default: 0 })
  helpful: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
