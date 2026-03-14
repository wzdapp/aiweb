import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('leads')
export class Lead {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  company: string | null;

  @Column({
    type: 'enum',
    enum: ['new', 'contacted', 'qualified', 'converted', 'lost'],
    default: 'new',
  })
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';

  @Column({ type: 'varchar', length: 50, nullable: true })
  source: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  product: string | null;

  @Column({ type: 'text', nullable: true })
  notes: string | null;

  @Column({ type: 'int', default: 0 })
  score: number;

  @Column({ type: 'int', unsigned: true, nullable: true, name: 'assigned_to' })
  assignedTo: number | null;

  @Column({ type: 'tinyint', width: 1, default: 1, name: 'is_active' })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
