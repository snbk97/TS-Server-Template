/* eslint-disable @typescript-eslint/no-explicit-any */
export class CustomError {
  message!: string;
  status!: number;
  additionalInfo!: unknown;

  constructor(message: string, status = 500, additionalInfo: unknown = {}) {
    this.message = message;
    this.status = status;
    this.additionalInfo = additionalInfo;
  }
}
