import { IRedirect } from "../../db/shortener/model";
import { IShortenerService } from "./interface";
import { IShortenerRepository } from "../../db/shortener/interface";
import { ShortenerRepository } from "../../db/shortener/repository";
import { RedirectDTO } from "./dto";

export class ShortenerService implements IShortenerService {
    constructor(
        private readonly shortenerRepository: IShortenerRepository
    ) {
    }
    async GetRedirectUrl(code: string): Promise<IRedirect | null> {
        return this.shortenerRepository.Find(code);
    }


    async CreateShortUrl(redirectDto: RedirectDTO): Promise<any> {
        const redirect: IRedirect = {
            code: redirectDto.code,
            url: redirectDto.url,
        }
        return this.shortenerRepository.Store(redirect);
    }
}