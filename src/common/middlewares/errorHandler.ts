import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../../models/others/CustomErrors';
import { AxiosError } from 'axios';

function errorHandler(err: TypeError | CustomError | AxiosError, req: Request, res: Response, next: NextFunction) {
  try {
    let customError = err;
    if ((<AxiosError>err).isAxiosError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: any = (<AxiosError>err).toJSON();
      customError = new CustomError(error.message);
    }
    if (!(err instanceof CustomError) && !(<AxiosError>err).isAxiosError) {
      customError = new CustomError('Internal server error');
    }
    res.status((customError as CustomError).status).send(customError);
  } catch {
    next(err);
  }
}

export default errorHandler;
