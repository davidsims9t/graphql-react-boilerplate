const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  id: Schema.ObjectId,
  name: String
});

module.exports = mongoose.model('Company', CompanySchema);
