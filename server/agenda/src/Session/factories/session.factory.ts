import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Session } from '../entities/session.entity';
import { format, addHours, addDays } from 'date-fns';

define(Session, (faker: typeof Faker) => {
  const session = new Session();
  let date = new Date();
  let nextDays = [date, addDays(date, 1), addDays(date, 2)];

  session.venue = faker.random.arrayElement([
    'smart capital',
    'creative culture',
    'emerging tech',
    'tech for humans',
    'people',
  ]);
  session.day = format(faker.random.arrayElement(nextDays), 'd MMM');
  session.type = faker.random.word();
  session.title = faker.random.word();
  session.description = faker.lorem.sentences();
  session.stage = faker.random.arrayElement(['channel_1', 'channel_2']);
  session.starting_time = format(date, 'HH:mm');
  session.ending_time = format(addHours(date, 2), 'HH:mm');
  session.created_at = faker.random.arrayElement(nextDays);

  return session;
});
