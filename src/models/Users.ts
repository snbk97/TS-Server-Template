import { Schema, model, ObjectId, Document } from 'mongoose';

export const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
});

const UserModel = model('users', UserSchema);

export default UserModel;

export class User {
  name: string;
  email: string;
  phone: string;

  constructor(name: string, email: string, phone: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

export interface IUser {
  // id: ObjectId | string;
  name: string;
  email: string;
  phone: string;
}

export type UserDocument = Omit<IUser, 'id'> & Document;

// TODO: create User class
