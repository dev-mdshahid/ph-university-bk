import { RequestHandler } from 'express';
import { SendErrorResponse } from '../utilities/send-response';

export const NotFound: RequestHandler = (_, res) => {
  SendErrorResponse(res, {
    status: 404,
    message: 'No such api exist!',
    error: 'NOT FOUND',
  });
};
