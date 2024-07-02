import { RequestHandler } from 'express';

const getAllStudents: RequestHandler = async (req, res, next) => {
  console.log('Hello get all students controller');
};

export const StudentController = {
  getAllStudents,
};
