import { Request, Response } from 'express';


export interface IShortenerController {
  GetRedirectUrl(req: Request, res: Response): Promise<void>;
  CreateShortUrl(req: Request, res: Response): Promise<void>;
}
