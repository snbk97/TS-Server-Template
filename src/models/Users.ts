import { Schema, model } from 'mongoose';

export const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const UserModel = model('users', UserSchema);

export default UserModel;

// TODO: create User class
