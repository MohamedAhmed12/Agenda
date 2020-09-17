import Faker from 'faker';
import { Factory, Seeder } from 'typeorm-seeding';
import { getConnection } from 'typeorm';
import { Tag } from '../entities/tag.entity';
import { Session } from '../../Session/entities/session.entity';

export default class CreateTags implements Seeder {
  public async run(factory: Factory, faker): Promise<any> {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    await factory(Tag)().createMany(6);
    console.log(faker);

    for (var i = 1; i < 31; i++) {
      await getConnection()
        .createQueryBuilder()
        .relation(Session, 'tags')
        .of(i)
        .add([
          getRandomIntInclusive(1, 2),
          getRandomIntInclusive(3, 4),
          getRandomIntInclusive(5, 6),
        ]);
    }
  }
}
