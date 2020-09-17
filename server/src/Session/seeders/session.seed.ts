import { Factory, Seeder } from 'typeorm-seeding';
import { Connection, getConnection } from 'typeorm';
import Faker from 'faker';
import { Session } from '../entities/session.entity';
import { Speaker } from '../../Speaker/entities/speaker.entity';
import { Tag } from '../../Tag/entities/tag.entity';

export default class SessionSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Session)()
      .map(async (session: Session) => {
        const speakers: Speaker[] = await factory(Speaker)().createMany(2);
        session.speakers = speakers;

        return session;
      })
      .createMany(30);
  }
}
