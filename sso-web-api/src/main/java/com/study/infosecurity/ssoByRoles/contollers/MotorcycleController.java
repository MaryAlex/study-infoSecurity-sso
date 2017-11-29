package com.study.infosecurity.ssoByRoles.contollers;


import com.study.infosecurity.ssoByRoles.contollers.template.ObjectControllerTemplate;
import com.study.infosecurity.ssoByRoles.model.dto.Motorcycle;
import com.study.infosecurity.ssoByRoles.model.dto.User;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode;
import com.study.infosecurity.ssoByRoles.model.poko.constant.Roles;
import com.study.infosecurity.ssoByRoles.model.poko.response.CommonResponse;
import com.study.infosecurity.ssoByRoles.service.MotorcycleService;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping(value = "/motorcycle")
public class MotorcycleController extends ObjectControllerTemplate<Motorcycle> {

    @Autowired
    public MotorcycleController(MotorcycleService motorcycleService) {
        this.objectService = motorcycleService;
    }
}