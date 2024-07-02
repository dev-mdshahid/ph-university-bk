import { Response } from 'express';

type TSuccessResponse = {
  status: number;
  message: string;
  data: any;
};

type TErrorResponse = {
  status: number;
  message: string;
  error: any;
};

export const SendSuccessResponse = (
  res: Response,
  { status, message, data }: TSuccessResponse
) => {
  res.status(status).json({
    success: true,
    message,
    data,
  });
};

export const SendErrorResponse = (
  res: Response,
  { status, message, error }: TErrorResponse
) => {
  res.status(status).json({
    success: false,
    message,
    error,
  });
};
