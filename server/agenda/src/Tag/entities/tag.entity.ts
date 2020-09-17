import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Session } from '../../Session/entities/session.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => Session,
    session => session.tags,
  )
  @JoinTable()
  sessions: Session[];
}
