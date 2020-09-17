import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Tag } from '../../Tag/entities/tag.entity';
import { Speaker } from '../../Speaker/entities/speaker.entity';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  venue: string;

  @Column()
  day: string;

  @Column()
  stage: string;

  @Column()
  type: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  starting_time: string;

  @Column()
  ending_time: string;

  @CreateDateColumn({ type: 'datetime', default: () => `now()` })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime', default: () => `now()` })
  updated_at: Date;

  @ManyToMany(
    type => Tag,
    tag => tag.sessions,
    { cascade: ['insert', 'update'] },
  )
  tags: Tag[];

  @ManyToMany(
    type => Speaker,
    speaker => speaker.sessions,
    { cascade: ['insert', 'update'] },
  )
  @JoinTable()
  speakers: Speaker[];
}
