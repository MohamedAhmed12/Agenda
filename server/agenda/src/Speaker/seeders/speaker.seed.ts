import { from } from 'rxjs';
import { Factory, Seeder } from 'typeorm-seeding';
import { Speaker } from '../entities/speaker.entity';

export default class CreateSpeakers implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(Speaker)().createMany(1);
  }
}
