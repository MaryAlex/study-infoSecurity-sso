import Axios from 'axios';
import { Cookies } from 'react-cookie';

export class LoginService {
    static cookie = new Cookies();
    // TODO: Change when server will be ready
    static authentication = (username: string, password: string): void => {
        LoginService.cookie.set('token', 'some_token');
    }

    static isTokenValide = (): boolean => {
        return true;
    }
}
