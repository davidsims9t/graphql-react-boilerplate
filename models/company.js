const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: String
});

mongoose.model('user', CompanySchema);
