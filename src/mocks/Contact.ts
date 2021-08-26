import faker from 'faker';

const contactTypes = [
  'AppraisedLocation',
  'DiseaseDiagnosedLocation',
  'Consignee',
  'Consignor',
  'Contact',
  'JointOwner',
  'Lab',
  'Mortgagee',
  'MovedFromLocation',
  'Owner',
  'Practitioner',
  'SharedContact',
  'Market',
  'Establishment',
];

const emailTypes = ['Personal'];
const phoneTypes = ['Primary'];

export const mockContact = () => ({
  businessName: faker.company.companyName(),
  firstName: faker.name.firstName(),
  middleName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  // fullName: faker.name.firstName() + faker.name.lastName(),
  // favorite: faker.random.boolean(),
  // brucellosisAgreeCode: faker.random.words(1),
  // tuberculosisAgreeCode: faker.random.words(1),
  contactTypes: [faker.helpers.randomize(contactTypes)],
});

export const mockEmail = () => {
  return {
    emailAddress: faker.internet.email(),
    emailType: faker.helpers.randomize(emailTypes),
    // id: faker.random.uuid()
  };
};

export const mockPhone = () => {
  return {
    // https://github.com/Marak/faker.js/wiki/Phone
    telephone: faker.phone.phoneNumberFormat(0),
    phoneType: faker.helpers.randomize(phoneTypes),
  };
};
