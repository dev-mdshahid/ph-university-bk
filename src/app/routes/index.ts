import { Router } from 'express';
import { UserRouter } from '../modules/user/user.route';
import { StudentRouter } from '../modules/student/student.route';

export const AppRoute = Router();

const routes = [
  {
    path: '/users',
    router: UserRouter,
  },
  {
    path: '/students',
    router: StudentRouter,
  },
];

routes.forEach(({ path, router }) => {
  AppRoute.use(path, router);
});
