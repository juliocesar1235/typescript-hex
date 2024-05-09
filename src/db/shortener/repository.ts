import { model, connect, HydratedDocument, Model } from "mongoose";
import { IShortenerRepository } from "./interface";
import { IRedirect, Redirect } from "./model";



export class ShortenerRepository implements IShortenerRepository {
    modelRedirect: Model<IRedirect>;

    constructor() {
        this.modelRedirect = Redirect;
    }
    async Find(code: string): Promise<IRedirect | null> {
        return await Redirect.findOne({ code: code});
    }
    async Store(redirectObj: IRedirect): Promise<any> {
        try {
            await Redirect.create(redirectObj)
            const shortenUrl = process.env.URL_DEV  + redirectObj.code;
            return { shortenUrl }
        } catch (error) {
            console.error(error)
            throw error
        }
        return null
    }
    
}