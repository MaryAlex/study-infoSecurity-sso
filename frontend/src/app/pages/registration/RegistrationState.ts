import { AlertObject } from '@src/app/constants/AlertObject';

export class RegistrationState {
    constructor(public username: string = '', public password: string = '', public alert: AlertObject = new AlertObject()) {
    }
}
