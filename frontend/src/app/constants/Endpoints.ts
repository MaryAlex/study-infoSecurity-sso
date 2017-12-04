const AUTH_API = '/authApi';
const COMPUTER_API = '/computerApi';
const FLAT_API = '/flatApi';
const MOTORCYCLE_API = '/motorcycleApi';
const COMPUTER_TYPE = '/computer';
const FLAT_TYPE = '/flat';
const MOTORCYCLE_TYPE = '/motorcycle';
export const MAIN_URL = '/';
export const LOGIN_URL = '/login';

class MainAuthEndpoints {
    authentication = `${AUTH_API}/authentication`;
    validation = `${AUTH_API}/validation`;
}

class TypesEndpoints {
    TYPES_CONTROLLER = '/types';
    getAll = `${COMPUTER_API}${this.TYPES_CONTROLLER}/getAll`;
    getByObjectName = `${COMPUTER_API}${this.TYPES_CONTROLLER}/getByObjectName`;
}

class AccountEndpoints {
    USER_CONTROLLER = '/user';
    add = `${AUTH_API}${this.USER_CONTROLLER}/add`;
}

export class ObjectEndpoints {
    getAll = `${this.apiType}${this.objectType}/getAll`;
    add = `${this.apiType}${this.objectType}/add`;
    update = `${this.apiType}${this.objectType}/update`;
    deleteObj = `${this.apiType}${this.objectType}/delete`;

    constructor(private apiType: string, private objectType: string) {
    }
}

export class AdminEndpoints {
    ADMIN_CONTROLLER = '/admin';
    getAllUsers = `${COMPUTER_API}${this.ADMIN_CONTROLLER}/getAllUsers`;
    getAllRoles = `${COMPUTER_API}${this.ADMIN_CONTROLLER}/getAllRoles`;
    updateUserRoles = `${COMPUTER_API}${this.ADMIN_CONTROLLER}/updateUserRoles`;
    deleteRole = `${COMPUTER_API}${this.ADMIN_CONTROLLER}/deleteRole`;
    addRole = `${COMPUTER_API}${this.ADMIN_CONTROLLER}/addRole`;
}

export class Endpoints {
    static mainAuth = new MainAuthEndpoints();
    static accounts = new AccountEndpoints();
    static admin = new AdminEndpoints();
    static computers = new ObjectEndpoints(COMPUTER_API, COMPUTER_TYPE);
    static flats = new ObjectEndpoints(FLAT_API, FLAT_TYPE);
    static motorcycles = new ObjectEndpoints(MOTORCYCLE_API, MOTORCYCLE_TYPE);
    static types = new TypesEndpoints();
}
