import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Session } from '../../Session/entities/session.entity';

@Entity()
export class Speaker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  pic: string;

  @ManyToMany(
    type => Session,
    session => session.speakers,
  )
  @JoinTable()
  sessions: Session[];
}
