import User = SSOByRolesDefinitions.User;
import { DELETE_USER, UPDATE_USER } from '@src/app/constants/ActionsTypes';

export const updateUser = (user: User) => ({
    type: UPDATE_USER,
    user,
});
export const removeUser = () => ({
    type: DELETE_USER,
});
