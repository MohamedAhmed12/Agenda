import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Tag } from '../entities/tag.entity';

define(Tag, (faker: typeof Faker) => {
  const tag = new Tag();
  tag.name = faker.random.word();

  return tag;
});
