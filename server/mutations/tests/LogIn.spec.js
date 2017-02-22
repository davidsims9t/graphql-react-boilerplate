const LogIn = require('../LogIn');

require('dotenv').load();

test('should log in the user', () => {
  LogIn.resolve({}, {
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD
  }).then(res => {
    expect(res).toEqual({
      id_token: expect.any(String),
      access_token: expect.any(String),
      token_type: 'bearer'
    });
  }).catch(err => {
    console.error(err);
  });
});
