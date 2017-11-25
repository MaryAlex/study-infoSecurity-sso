// TODO: add doc comments
declare module 'react-cookie' {
    import { Component } from 'react';
    export type CookieObject = string | object;

    export interface IGetOptions {
        doNotParse: boolean;
    }

    export interface ICookieOptions {
        path: string;
        expires: Date;
        maxAge: number;
        domain: string;
        secure: boolean;
        httpOnly: boolean;
    }

    class Cookies {
        // TODO: Return value maybe another
        get: (name: string, options?: IGetOptions) => CookieObject;
        getAll: (options?: IGetOptions) => CookieObject[];
        set: (name: string, value: CookieObject, options?: ICookieOptions) => void;
        remove: (name: string, options?: ICookieOptions) => void;
    }

    const withCookies: (component: Component) => Component;

    class CookiesProvider extends Component {
    }

    export { Cookies, withCookies, CookiesProvider };
}
