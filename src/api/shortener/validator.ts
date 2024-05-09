import { RedirectDTO } from "../../service/shortener/dto";
import { MINIMUM_CODE_LENGTH } from "./constants";


export const createShortUrlValidator = (redirectDto: RedirectDTO): (null | Error) => {
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator

    const validUrl = !!urlPattern.test(redirectDto.url);
    if (!validUrl) {
        throw new Error("The url is not valid.")
    }
    console.log(redirectDto.code.length)
    if (!redirectDto.code || redirectDto.code.length < MINIMUM_CODE_LENGTH) {
        throw new Error("The code is missing or its not longer than 4 characters.")
    }
    return null
}