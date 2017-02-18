const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: String,
  age: Number,
  companyId: Number
});

mongoose.model('user', UserSchema);
