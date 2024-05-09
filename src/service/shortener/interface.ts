import { IRedirect } from "../../db/shortener/model";
import { RedirectDTO } from "./dto";


export interface IShortenerService {
    GetRedirectUrl(code: string): Promise<IRedirect | null>;
    CreateShortUrl(redirectObj: RedirectDTO): Promise<any>;
  }