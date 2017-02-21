const CompanyModel = require('../Company');

require('dotenv').load();

test('it should return the Company model', () => {
  CompanyModel.findOne({}, (err, company) => {
    expect(company).toBe(expect.anything());
  });
});
