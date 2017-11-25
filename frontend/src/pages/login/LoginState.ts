export class LoginState {
    constructor(public username: string = '', public password: string = '') {
    }

    withPassword = (password: string): LoginState => {
        const to = this.copy();
        to.password = password;
        return to;
    }

    withUsername = (username: string): LoginState => {
        const to = this.copy();
        to.username = username;
        return to;
    }

    private copy(): LoginState {
        return new LoginState(this.username, this.password);
    }
}
