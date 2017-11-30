import { AlertObject } from '@src/app/constants/AlertObject';

export class LoginState {
    constructor(public username: string = '', public password: string = '', public alert: AlertObject = new AlertObject()) {
    }
}
