import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ type: 'int', unsigned: true, name: 'from_user_id' })
  fromUserId: number;

  @Column({ type: 'int', unsigned: true, name: 'to_user_id' })
  toUserId: number;

  @Column({ type: 'varchar', length: 255 })
  subject: string;

  @Column({ type: 'text' })
  content: string;

  @Column({
    type: 'enum',
    enum: ['unread', 'read', 'archived'],
    default: 'unread',
  })
  status: 'unread' | 'read' | 'archived';

  @Column({ type: 'boolean', default: false, name: 'is_system' })
  isSystem: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'read_at' })
  readAt: Date;
}
