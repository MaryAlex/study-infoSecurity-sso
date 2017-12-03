import { CookieObject, Cookies, ICookieOptions, IGetOptions } from 'react-cookie';

export class CookiesService {
    static cookie = new Cookies();
    static TOKEN_KEY = 'sso_app_token';

    static set = (name: string, value: CookieObject, options?: ICookieOptions): void =>
        CookiesService.cookie.set(name, value, options)

    static get = (name: string, options?: IGetOptions): CookieObject =>
        CookiesService.cookie.get(name, options)

    static remove = (name: string, options?: ICookieOptions): void =>
        CookiesService.cookie.remove(name, options)

    static getToken = (): CookieObject => CookiesService.get(CookiesService.TOKEN_KEY);
    static removeToken = (): void => CookiesService.remove(CookiesService.TOKEN_KEY);

    static isHasToken = (): boolean => !!CookiesService.getToken();
}
