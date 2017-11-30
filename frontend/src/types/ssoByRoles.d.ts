// Generated using typescript-generator version 1.28.343 on 2017-11-30 10:52:06.

declare namespace SSOByRolesDefinitions {

    interface Computer {
        id: number;
        firm: string;
        model: string;
        battery: string;
        processor: string;
        type: Type;
    }

    interface Flat {
        id: number;
        numbersOfRoom: any;
        square: any;
        description: string;
        type: Type;
    }

    interface Motorcycle {
        id: number;
        firm: string;
        model: string;
        width: any;
        height: any;
        displacement: string;
        type: Type;
    }

    interface Role {
        id: number;
        name: string;
        typeCRUDs: TypeCRUD[];
    }

    interface Type {
        id: number;
        name: string;
        belonging: ObjectNames;
    }

    interface TypeCRUD {
        id: number;
        type: Type;
        role: Role;
        createAccess: boolean;
        readAccess: boolean;
        updateAccess: boolean;
        deleteAccess: boolean;
    }

    interface User {
        id: number;
        username: string;
        password: string;
        roles: Role[];
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

    const enum ObjectNames {
        COMPUTER = 0,
        FLAT = 1,
        MOTORCYCLE = 2,
    }

    const enum ResponseCode {
        SUCCESS = 0,
        ERROR = 1,
        AUTHENTICATION_FAIL_ERROR = 2,
    }

}
