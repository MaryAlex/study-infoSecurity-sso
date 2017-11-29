package com.study.infosecurity.ssoByRoles.contollers;


import com.study.infosecurity.ssoByRoles.contollers.template.ObjectControllerTemplate;
import com.study.infosecurity.ssoByRoles.model.dto.Flat;
import com.study.infosecurity.ssoByRoles.service.FlatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping(value = "/flat")
public class FlatController extends ObjectControllerTemplate<Flat> {
    @Autowired
    public FlatController(FlatService flatService) {
        this.objectService = flatService;
    }
}