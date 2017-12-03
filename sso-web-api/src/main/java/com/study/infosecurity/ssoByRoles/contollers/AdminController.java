package com.study.infosecurity.ssoByRoles.contollers;

import com.study.infosecurity.ssoByRoles.model.dto.Role;
import com.study.infosecurity.ssoByRoles.model.dto.User;
import com.study.infosecurity.ssoByRoles.model.poko.UpdateRolesRequest;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode;
import com.study.infosecurity.ssoByRoles.model.poko.response.CommonResponse;
import com.study.infosecurity.ssoByRoles.model.poko.response.GetAllResponse;
import com.study.infosecurity.ssoByRoles.service.RoleService;
import com.study.infosecurity.ssoByRoles.model.service.UserService;
import com.study.infosecurity.ssoByRoles.utils.RoleUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.function.Supplier;


// TODO: admin trigger
@RestController
@RequestMapping(value = "/admin")
public class AdminController {
    private UserService userService;
    private RoleService roleService;

    @Autowired
    public AdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
    public CommonResponse getAllUsers(@RequestAttribute User user) {
        try {
            return this.withAdminAccessCheck(user, () -> new GetAllResponse<>(this.userService.findAll()));
        } catch (Exception exception) {
            return new CommonResponse(ResponseCode.ERROR, "Error while do findAllUsers:" + exception.getMessage());
        }
    }

    @RequestMapping(value = "/getAllRoles", method = RequestMethod.GET)
    public CommonResponse getAllRoles(@RequestAttribute User user) {
        try {
            return this.withAdminAccessCheck(user, () -> new GetAllResponse<>(this.roleService.findAll()));
        } catch (Exception exception) {
            return new CommonResponse(ResponseCode.ERROR, "Error while do findAllRoles:" + exception.getMessage());
        }
    }

    @RequestMapping(value = "/updateUserRoles", method = RequestMethod.POST)
    public CommonResponse update(@RequestAttribute User user, @RequestBody UpdateRolesRequest requestBody) {
        try {
            return this.withAdminAccessCheck(user, () -> {
                User userById = this.userService.getById(requestBody.getUserId());
                if (userById != null) {
                    userById.setRoles(requestBody.getRoles());
                    this.userService.update(userById);
                    return new CommonResponse();
                }
                return new CommonResponse(ResponseCode.ERROR, "There is no such user");
            });

        } catch (Exception exception) {
            return new CommonResponse(ResponseCode.ERROR, "Error while do update:" + exception.getMessage());
        }
    }

    @RequestMapping(value = "/deleteRole", method = RequestMethod.POST)
    public CommonResponse deleteRole(@RequestAttribute User user, @RequestBody Role role) {
        try {
            return this.withAdminAccessCheck(user, () -> {
                this.roleService.removeById(role.getId());
                return new CommonResponse();
            });
        } catch (Exception exception) {
            return new CommonResponse(ResponseCode.ERROR, "Error while delete role:" + exception.getMessage());
        }
    }

    private CommonResponse withAdminAccessCheck(User user, Supplier<CommonResponse> action) throws Exception {
        if (RoleUtils.isHasAdminAccess(user)) {
            return action.get();
        }
        return new CommonResponse(ResponseCode.ERROR, "Access denied");
    }

}
