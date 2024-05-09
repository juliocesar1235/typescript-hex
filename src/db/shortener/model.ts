import { Schema, model } from "mongoose";

export interface IRedirect {
    code: string;
    url: string;
    createdAt?: Date;
}

const redirectSchema = new Schema<IRedirect>({
    code: { type: String },
    url: { type: String },
    createdAt: { type: Date, default: Date.now }
});

export const Redirect = model<IRedirect>('Redirect', redirectSchema);

