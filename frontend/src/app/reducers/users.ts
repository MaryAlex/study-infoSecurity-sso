import User = SSOByRolesDefinitions.User;
import { ReduxAction } from '@src/types/types';
import { DELETE_USER, UPDATE_USER } from '@src/app/constants/ActionsTypes';

class UserState implements User {
    id: number;
    username: string;
    password: string;
    roles: SSOByRolesDefinitions.Role[];
}

interface IUserAction extends ReduxAction {
    user: User;
}

export const users = (state: UserState = new UserState(), action: IUserAction) => {
    switch (action.type) {
        case UPDATE_USER:
            return action.user;
        case  DELETE_USER:
            return new UserState();
        default:
            return state;
    }
};
