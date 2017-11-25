// Generated using typescript-generator version 1.28.343 on 2017-11-25 20:55:45.

declare namespace SSOByRolesDefinitions {

    interface User {
        id: number;
        username: string;
        password: string;
    }

    interface AuthenticationResponse extends CommonResponse {
        user: User;
        token: string;
    }

    interface CommonResponse {
        responseCode: ResponseCode;
        errorMessage: string;
    }

    const enum ResponseCode {
        SUCCESS = 0,
        ERROR = 1,
    }

}
