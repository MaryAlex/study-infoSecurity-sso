package com.study.infosecurity.ssoByRoles.contollers.template;

import com.study.infosecurity.ssoByRoles.model.dto.User;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode;
import com.study.infosecurity.ssoByRoles.model.poko.response.GetAllResponse;
import com.study.infosecurity.ssoByRoles.model.poko.response.CommonResponse;
import com.study.infosecurity.ssoByRoles.service.IObjectService;
import com.study.infosecurity.ssoByRoles.utils.RoleUtils;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

public class ObjectControllerTemplate<T> {
    protected IObjectService<T> objectService;

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public CommonResponse getAll(@RequestAttribute User user) {
        try {
            return new GetAllResponse<>(this.getObjectsWithAccess(user));
        } catch (Exception exception) {
            return new CommonResponse(ResponseCode.ERROR, "Error while do findAll:" + exception.getMessage());
        }
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    private CommonResponse add(@RequestAttribute User user, @RequestBody T object) {
        try {
            if (RoleUtils.isHasCreateAccess(this.objectService.getTypeID(object), user)) {
                this.objectService.save(object);
                return new CommonResponse();
            }
            return getAccessDeniedResponse();
        } catch (Exception exception) {
            return new CommonResponse(ResponseCode.ERROR, "Error while adding:" + exception.getMessage());
        }
    }

    @RequestMapping(value = "/update", method = RequestMethod.GET)
    public CommonResponse update(@RequestAttribute User user, @RequestBody T object) {
        try {
            if (RoleUtils.isHasUpdateAccess(this.objectService.getTypeID(object), user)) {
                if (this.objectService.isExists(object)) {
                    this.objectService.save(object);
                    return new CommonResponse();
                }
                return new CommonResponse(ResponseCode.ERROR, "There is no such object");
            }
            return getAccessDeniedResponse();
        } catch (Exception exception) {
            return new CommonResponse(ResponseCode.ERROR, "Error while update:" + exception.getMessage());
        }
    }

    @RequestMapping(value = "/delete", method = RequestMethod.GET)
    public CommonResponse delete(@RequestAttribute User user, @RequestBody T object) {
        try {
            if (RoleUtils.isHasDeleteAccess(this.objectService.getTypeID(object), user)) {
                this.objectService.deleteByObject(object);
                return new CommonResponse();
            }
            return getAccessDeniedResponse();
        } catch (Exception exception) {
            return new CommonResponse(ResponseCode.ERROR, "Error while delete:" + exception.getMessage());
        }
    }

    private List<T> getObjectsWithAccess(User user) {
        List<T> objects = this.objectService.findAll();
        objects.removeIf(object -> !RoleUtils.isHasReadAccess(this.objectService.getTypeID(object), user));
        return objects;
    }

    private CommonResponse getAccessDeniedResponse() {
        return new CommonResponse(ResponseCode.ERROR, "Access denied");
    }
}
