import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Speaker } from '../entities/speaker.entity';

define(Speaker, (faker: typeof Faker) => {
  const speaker = new Speaker();
  speaker.name = faker.name.firstName() + ' ' + faker.name.lastName();
  speaker.pic = faker.random.image();
  return speaker;
});
