package com.study.infosecurity.ssoByRoles.utils;

import com.study.infosecurity.ssoByRoles.model.dto.Role;
import com.study.infosecurity.ssoByRoles.model.dto.TypeCRUD;
import com.study.infosecurity.ssoByRoles.model.dto.User;
import com.study.infosecurity.ssoByRoles.model.poko.constant.CRUD;

public class RoleUtils {

    public static boolean isHasCreateAccess(Long type_id, User user) {
        return isHasAccess(type_id, user, CRUD.CREATE);
    }

    public static boolean isHasReadAccess(Long type_id, User user) {
        return isHasAccess(type_id, user, CRUD.READ);
    }

    public static boolean isHasUpdateAccess(Long type_id, User user) {
        return isHasAccess(type_id, user, CRUD.UPDATE);
    }

    public static boolean isHasDeleteAccess(Long type_id, User user) {
        return isHasAccess(type_id, user, CRUD.DELETE);
    }

    private static boolean isHasAccess(Long type_id, User user, CRUD operation) {
        for (Role role : user.getRoles()) {
            for (TypeCRUD typeCRUD : role.getTypeCRUDs()) {
                if ((typeCRUD.getType().getId() == type_id) && isOperationAllowed(typeCRUD, operation)) {
                    return true;
                }
            }
        }
        return false;
    }

    private static boolean isOperationAllowed(TypeCRUD typeCRUD, CRUD operation) {
        switch (operation) {
            case CREATE:
                return typeCRUD.getCreateAccess();
            case READ:
                return typeCRUD.getReadAccess();
            case UPDATE:
                return typeCRUD.getUpdateAccess();
            case DELETE:
                return typeCRUD.getDeleteAccess();
            default:
                return false;
        }
    }
}
