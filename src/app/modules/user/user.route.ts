import { Router } from 'express';
import { UserController } from './user.controller';
import { ValidateRequest } from '../../middlewares/validate-request';
import { StudentValidation } from '../student/student.validate';

export const UserRouter = Router();

UserRouter.post(
  '/create-student',
  ValidateRequest(StudentValidation.SCreateStudentValidation),
  UserController.createStudent
);
