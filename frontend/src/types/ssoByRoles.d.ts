// Generated using typescript-generator version 1.28.343 on 2017-11-26 00:01:13.

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
        numbersOfRoom: string;
        square: string;
        descriptioin: string;
    }

    interface Motorcycle {
        id: number;
        firm: string;
        model: string;
        width: string;
        height: string;
        displacement: string;
    }

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

    interface ComputerResponse extends CommonResponse {
        computers: Computer[];
    }

    interface FlatResponse extends CommonResponse {
        flats: Flat[];
    }

    interface MotorcycleResponse extends CommonResponse {
        motorcycles: Motorcycle[];
    }

    const enum ResponseCode {
        SUCCESS = 0,
        ERROR = 1,
    }

    const enum Roles {
        ADMIN = 0,
        COMPUTER_WRITE = 1,
        FLAT_WRITE = 2,
        MOTORCYCLE_WRITE = 3,
    }

}
