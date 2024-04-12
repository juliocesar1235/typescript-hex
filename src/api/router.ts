import { Router, Request, Response } from 'express';
import { IShortenerController } from './shortener/interface';
import { ShortenerController } from './shortener/handler';

// Creating router instance
const router = Router();

// Initialize controllers
const shortenerController: IShortenerController = new ShortenerController();


//Set routes
router.get('/:code', shortenerController.GetRedirectUrl);

export default router;