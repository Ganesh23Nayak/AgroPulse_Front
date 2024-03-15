import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(4)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: sample(['Alis','Darshan','Ram','John']),
  company: sample(['Mangalore','Karkala','Udupi']),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'Inactivity']),
  role: sample([
  'Tractor+Tiller',
  'Planter',
  'Harvesters'
  ]),
}));
