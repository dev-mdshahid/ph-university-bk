import express, { Request, Response } from 'express';
import config from './app/config';
import cors from 'cors';
import { GlobalErrorHandler } from './app/middlewares/global-error-handler';
import { NotFound } from './app/middlewares/not-found';
import { AppRoute } from './app/routes';
import { SendSuccessResponse } from './app/utilities/send-response';

// creating an instance of app
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routers
app.use('/api/v1', AppRoute);

// root endpoint of the app
app.get('/', (req: Request, res: Response) => {
  SendSuccessResponse(res, {
    status: 200,
    message: 'Server is running at port ' + config.port,
    data: {},
  });
});

// Global Error Handler
app.use(GlobalErrorHandler);

// if no route matches
app.use(NotFound);

export default app;
