import { CookieObject, Cookies, ICookieOptions, IGetOptions } from 'react-cookie';

export class CookiesService {
    static cookie = new Cookies();
    static TOKEN_KEY = 'sso_app_token';

    static set = (name: string, value: CookieObject, options?: ICookieOptions): void =>
        CookiesService.cookie.set(name, value, options)

    static get = (name: string, options?: IGetOptions): CookieObject =>
        CookiesService.cookie.get(name, options)
}
