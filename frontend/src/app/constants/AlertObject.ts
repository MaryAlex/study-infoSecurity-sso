export class AlertObject {
    public isShow: boolean;

    constructor(public message: string = '') {
        this.isShow = !!message;
    }
}
