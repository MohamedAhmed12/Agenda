import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  getRepository,
  createQueryBuilder,
  Connection,
  getConnection,
} from 'typeorm';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
  ) {}

  async getSessions(): Promise<Session> {
    return this.sessionRepository.findOne(1, { relations: ['speakers'] });
  }

  async getSessionsByDay(day: string): Promise<Session[]> {
    return this.sessionRepository.find({
      where: { day: day + ' Sep' },
      relations: ['speakers', 'tags'],
    });
  }

  async getSessionsDays(connection: Connection): Promise<any> {
    let days = await getConnection().query(
      'SELECT distinct `day` FROM session',
    );

    function compare(a, b) {
      if (a.day < b.day) {
        return -1;
      }
      if (a.day > b.day) {
        return 1;
      }
      return 0;
    }

    return days.sort(compare);
  }

  async getSessionsVenue(): Promise<Session[]> {
    return await getConnection().query('SELECT distinct `venue` FROM session');
  }
}
