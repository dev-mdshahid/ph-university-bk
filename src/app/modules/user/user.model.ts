import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import { AccountStatuses, Roles } from './user.constants';
import bcrypt from 'bcrypt';

export const SUser = new Schema<TUser>(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      default: config.default_password,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: Roles,
      required: true,
    },
    accountStatus: {
      type: String,
      enum: AccountStatuses,
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

SUser.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round!)
  );
  next();
});

export const UserModel = model<TUser>('user', SUser);
