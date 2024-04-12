import { Request, Response } from "express";
import { IShortenerController } from "./interface";
import { MINIMUM_CODE_LENGTH } from "./constants";

export class ShortenerController implements IShortenerController {
  GetRedirectUrl(req: Request, res: Response): void {
    const code = req.params.code;
    if(code && code.length > MINIMUM_CODE_LENGTH){
      res.send("HAS A CODE");
      return;
    } 
    res.send("MISSING CODE");
    return;
  }
  CreateShortUrl(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
  
}