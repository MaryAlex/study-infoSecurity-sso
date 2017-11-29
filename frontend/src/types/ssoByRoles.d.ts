// Generated using typescript-generator version 1.28.343 on 2017-11-28 23:54:06.

declare namespace SSOByRolesDefinitions {

    interface Computer {
        id: number;
        firm: string;
        model: string;
        battery: string;
        proccesor: string;
    }

    interface Flat {
        id: number;
        numbersOfRoom: any;
        square: any;
        description: string;
    }

    interface Motorcycle {
        id: number;
        firm: string;
        model: string;
        width: any;
        height: any;
        displacement: string;
    }

    interface User {
        id: number;
        username: string;
        password: string;
        roles: Roles[];
    }

    interface UserForDB {
        id: number;
        username: string;
        password: string;
        roles: string;
    }

    interface AuthenticationResponse extends CommonResponse {
        user: User;
        token: string;
    }

    interface CommonResponse {
        responseCode: ResponseCode;
        errorMessage: string;
    }

    interface GetAllResponse<T> extends CommonResponse {
        objects: T[];
    }

    interface ValidationResponse extends CommonResponse {
        user: User;
    }

    const enum ResponseCode {
        SUCCESS = 0,
        ERROR = 1,
        AUTHENTICATION_FAIL_ERROR = 2,
    }

    const enum Roles {
        ADMIN = 0,
        COMPUTER_WRITE = 1,
        FLAT_WRITE = 2,
        MOTORCYCLE_WRITE = 3,
    }

}
