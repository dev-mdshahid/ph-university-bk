import { RequestHandler } from 'express';
import { UserServices } from './services';
import { TryCatch } from '../../utilities/try-catch';
import { SendSuccessResponse } from '../../utilities/send-response';

const createStudent: RequestHandler = TryCatch(async (req, res, next) => {
  const { password, student } = req.body;
  const result = await UserServices.createStudentIntoDB(password, student);

  SendSuccessResponse(res, {
    status: 200,
    message: 'User created successfully!',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
