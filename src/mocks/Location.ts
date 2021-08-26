import faker from 'faker';

export const mockLocation = () => {
  return {
    id: faker.datatype.uuid(),
    locationType: faker.helpers.randomize(['Mailing']),
    locationIdentifier: faker.datatype.uuid(),
    statePremisesIdentifier: `premID`,
    line1: faker.address.streetAddress(),
    line2: faker.helpers.randomize([
      `ste ${faker.random.number(999)}`,
      '2nd fl',
      '',
    ]),
    city: faker.address.city(),
    country: faker.address.country(),
    state: faker.address.stateAbbr(),
    county: faker.address.county(),
    postalCode: faker.address.zipCode(),
    latitude: parseFloat(faker.address.latitude()),
    longitude: parseFloat(faker.address.longitude()),
    description: faker.hacker.phrase(),
    townshipName: faker.address.cityName(),
    township: faker.address.county(),
  };
};
