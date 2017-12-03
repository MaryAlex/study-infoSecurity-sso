// Generated using typescript-generator version 1.28.343 on 2017-12-03 20:04:14.

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
        numbersOfRoom: number;
        square: number;
        description: string;
        type: Type;
    }

    interface Motorcycle {
        id: number;
        firm: string;
        model: string;
        width: number;
        height: number;
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

    interface AddResponse extends CommonResponse {
        id: number;
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

    const enum CRUD {
        CREATE = 0,
        READ = 1,
        UPDATE = 2,
        DELETE = 3,
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
