'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  mongoose.set('useCreateIndex', true);
  const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    finalCookies: { type: String, unique: true, required: true },
    avatarUrl: { type: String, unique: false, required: false },
    nickName: { type: String, unique: false, required: false },
    bio: { type: String, unique: false, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  return mongoose.model('User', UserSchema);
};
