import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Exclude } from 'class-transformer';
@Entity('users')
export class User {
  @PrimaryColumn()
  readonly id: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Exclude()
  @Column()
  admin: boolean;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  update_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
