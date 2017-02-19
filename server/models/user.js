const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: Schema.ObjectId,
  fullName: String,
  age: Number,
  companyId: Number
});

module.exports = mongoose.model('User', UserSchema);
