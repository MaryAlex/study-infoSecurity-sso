package com.study.infosecurity.ssoByRoles.contollers;

import com.study.infosecurity.ssoByRoles.model.poko.constant.ObjectNames;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode;
import com.study.infosecurity.ssoByRoles.model.poko.response.CommonResponse;
import com.study.infosecurity.ssoByRoles.model.poko.response.GetAllResponse;
import com.study.infosecurity.ssoByRoles.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/types")
public class TypeController {
    private TypeService typeService;

    @Autowired
    public TypeController(TypeService typeService) {
        this.typeService = typeService;
    }

    @RequestMapping(value = "/getAllTypes", method = RequestMethod.GET)
    public CommonResponse getAllTypes() {
        try {
            return new GetAllResponse<>(this.typeService.findAll());
        } catch (Exception exception) {
            return new CommonResponse(ResponseCode.ERROR, "Error while do findAllTypes:" + exception.getMessage());
        }
    }

    @RequestMapping(value = "/getTypesByObjectName", method = RequestMethod.GET)
    public CommonResponse getTypesByObjectName(@RequestParam ObjectNames objectName) {
        try {
            return new GetAllResponse<>(this.typeService.findByBelonging(objectName));
        } catch (Exception exception) {
            return new CommonResponse(ResponseCode.ERROR, "Error while do findTypesByObjectName:" + exception.getMessage());
        }
    }
}
