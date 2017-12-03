import User = SSOByRolesDefinitions.User;
import Role = SSOByRolesDefinitions.Role;
import TypeCRUD = SSOByRolesDefinitions.TypeCRUD;
import Type = SSOByRolesDefinitions.Type;

export const isUserHasCreateRole = (user: User): boolean =>
    user && user.roles && !!user.roles.find((role: Role) => !!role.typeCRUDs.find((crud: TypeCRUD) => crud.createAccess));

export const isUserCanEditType = (user: User, type: Type): boolean =>
    user && user.roles && !!user.roles
        .find((role: Role) => !!role.typeCRUDs.find((crud: TypeCRUD) => crud.type.id === type.id && crud.updateAccess));

export const isUserCanDeleteType = (user: User, type: Type): boolean =>
    user && user.roles && !!user.roles
        .find((role: Role) => !!role.typeCRUDs.find((crud: TypeCRUD) => crud.type.id === type.id && crud.deleteAccess));
