import { Router } from 'express';
import { StudentController } from './student.controller';

export const StudentRouter = Router();

StudentRouter.get('/', StudentController.getAllStudents);
