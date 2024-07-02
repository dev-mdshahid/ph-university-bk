import { ErrorRequestHandler } from 'express';
import { SendErrorResponse } from '../utilities/send-response';

export const GlobalErrorHandler: ErrorRequestHandler = (
  error,
  _,
  res,
  next
) => {
  const status = 500;
  const errorMessage = error.message || 'Something went wrong';

  return SendErrorResponse(res, {
    status,
    message: errorMessage,
    error: String(error),
  });
};
