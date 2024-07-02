import mongoose from 'mongoose';
import config from '../../../config';
import {
  TCreateStudentPayload,
  TStudent,
} from '../../student/student.interface';
import { UserModel } from '../user.model';
import { StudentModel } from '../../student/student.model';

export const createStudentIntoDB = async (
  password: string,
  student: TStudent
) => {
  // starting a session for transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // const { password, student: studentData } = payload;

    // creating user
    const now = new Date();
    const id = String(now.getFullYear() + now.getTime());
    const finalPassword = password || config.default_password;

    const [insertedUser] = await UserModel.create(
      [
        {
          id,
          finalPassword,
          role: 'student',
        },
      ],

      { session }
    );

    // creating student
    if (insertedUser) {
      (student.id = insertedUser.id), (student.userId = insertedUser._id);
    }
    const [insertedStudent] = await StudentModel.create([student], { session });

    await session.commitTransaction();

    return {
      user: insertedUser,
      student: insertedStudent,
    };
  } catch (error: any) {
    await session.abortTransaction();
    throw new Error(error);
  } finally {
    await session.endSession();
  }
};
