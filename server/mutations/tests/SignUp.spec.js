const SignUp = require('../SignUp');
const faker = require('faker');

require('dotenv').load();

test('should sign up the user', () => {
  // const email = faker.internet.email().toLowerCase();
  const email = 'test';

  SignUp.resolve({}, {
    username: email,
    email,
    password: faker.random.alphaNumeric()
  }).then(res => {
    expect(res).toEqual({
      _id: expect.any(String),
      email_verified: false,
      email
    });
  }).catch(err => {
    console.error(err);
  });
});
