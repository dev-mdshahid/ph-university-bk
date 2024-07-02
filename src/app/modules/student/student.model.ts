import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';
import { BloodGroups } from './student.constants';
import { string } from 'zod';

const SUserName = new Schema<TUserName>({
  firstName: {
    type: String,
    required: true,
    maxlength: [20, 'First name cannot be more than 20 characters'],
    trim: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const SGuardian = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const SLocalGuardian = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const SStudent = new Schema<TStudent>(
  {
    id: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'user',
    },
    name: {
      type: SUserName,
      required: true,
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message: '{VALUE}',
      },
    },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    bloogGroup: {
      type: String,
      enum: BloodGroups,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    guardian: {
      type: SGuardian,
      required: true,
    },
    localGuardian: {
      type: SLocalGuardian,
      required: true,
    },
    profileImg: {
      type: String,
    },
    admissionSemester: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const StudentModel = model<TStudent>('Student', SStudent);
