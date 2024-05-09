import { Router, Request, Response } from 'express';
import { IShortenerController } from './shortener/interface';
import { ShortenerController } from './shortener/controller';
import { IShortenerRepository } from '../db/shortener/interface';
import { ShortenerRepository } from '../db/shortener/repository';
import { IShortenerService } from '../service/shortener/interface';
import { ShortenerService } from '../service/shortener/service';

// Creating router instance
const router = Router();

// Repository
//const shortenerRepository: IShortenerRepository = new ShortenerRepository()
//const shortenerService: IShortenerService = new ShortenerService(shortenerRepository);

// Initialize controllers
//const shortenerController: IShortenerController = new ShortenerController(shortenerService);

const makeCreateCommentController = (): IShortenerController => {
    const shortenerRepository: IShortenerRepository = new ShortenerRepository()
    const shortenerService: IShortenerService = new ShortenerService(shortenerRepository);
    return new ShortenerController(shortenerService);
  };

const redirectController: IShortenerController = makeCreateCommentController();
//Set routes
router.get('/:code',  (req,res) => redirectController.GetRedirectUrl(req,res));
router.post('/short',  (req,res) => redirectController.CreateShortUrl(req,res))
router.get('/', (req,res) => res.send("Hola World"))

export default router;