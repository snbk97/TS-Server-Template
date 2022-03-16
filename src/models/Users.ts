import { Schema, model, Document } from 'mongoose';

export const UserSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    deleted: {
      type: Boolean
    }
  },
  { timestamps: true }
);

const UserModel = model('users', UserSchema);

export class User {
  name: string;
  email: string;
  phone: string;
  deleted?: boolean;

  constructor(name: string, email: string, phone: string, deleted?: boolean) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.deleted = deleted;
  }
}

export interface IUser {
  name: string;
  email: string;
  phone: string;
  deleted?: boolean;
}

export type UserDocument = Omit<IUser, 'id'> & Document;

export default UserModel;