import { Request, Response } from 'express';


export interface IShortenerController {
  GetRedirectUrl(req: Request, res: Response): void;
  CreateShortUrl(req: Request, res: Response): void;
}
