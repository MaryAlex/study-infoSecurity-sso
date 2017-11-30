package com.study.infosecurity.ssoByRoles.contollers;


import com.study.infosecurity.ssoByRoles.contollers.template.ObjectControllerTemplate;
import com.study.infosecurity.ssoByRoles.model.dto.Motorcycle;
import com.study.infosecurity.ssoByRoles.service.MotorcycleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/motorcycle")
public class MotorcycleController extends ObjectControllerTemplate<Motorcycle> {

    @Autowired
    public MotorcycleController(MotorcycleService motorcycleService) {
        this.objectService = motorcycleService;
    }
}