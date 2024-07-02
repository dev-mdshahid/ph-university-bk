import { AnyZodObject } from 'zod';
import { TryCatch } from '../utilities/try-catch';

export const ValidateRequest = (schema: AnyZodObject) => {
  return TryCatch(async (req, _, next) => {
    const zodParsedData = schema.parse(req.body);
    req.body = zodParsedData;
    next();
  });
};
