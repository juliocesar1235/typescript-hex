import { Request, Response, response } from "express";
import { IShortenerController } from "./interface";
import { MINIMUM_CODE_LENGTH } from "./constants";
import { IShortenerService } from "../../service/shortener/interface";
import { RedirectDTO } from "../../service/shortener/dto";
import { createShortUrlValidator } from "./validator";

export class ShortenerController implements IShortenerController {
  
  constructor(
    private readonly shortenerService: IShortenerService
  )
  {}

  async GetRedirectUrl(req: Request, res: Response): Promise<void> {
    const code = req.params.code;
    if(code && code.length > MINIMUM_CODE_LENGTH){
      const redirectUrl = await this.shortenerService.GetRedirectUrl(code);
      console.log(redirectUrl)
      if (redirectUrl && redirectUrl.url) {
        res.status(302).redirect(redirectUrl?.url);
        return
      }
      res.status(500).send("An unexpected error ocurred getting the url");
      return;
    } 
    res.status(400).send("MISSING CODE");
    return;
  }
  async CreateShortUrl(req: Request, res: Response): Promise<void> {
    try {
      const redirectObj: RedirectDTO = req.body;
      createShortUrlValidator(redirectObj)
      const newUrl = await this.shortenerService.CreateShortUrl(redirectObj);
      res.status(201).send(newUrl)
      return
    }catch(err: any){
      console.error("ERRROR",err)
      if (err) {
        res.status(400).send(err.message);
        return
      }
      res.status(500).send(err);
      return
    }
  }
  
}