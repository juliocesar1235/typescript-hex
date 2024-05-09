import { IRedirect } from "./model"

export interface IShortenerRepository {
    Find(code: string): Promise<IRedirect | null>;
    Store(redirectObj: IRedirect): Promise<any>;
}