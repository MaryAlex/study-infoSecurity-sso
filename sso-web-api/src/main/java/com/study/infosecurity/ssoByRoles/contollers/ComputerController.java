package com.study.infosecurity.ssoByRoles.contollers;

import com.study.infosecurity.ssoByRoles.contollers.template.ObjectControllerTemplate;
import com.study.infosecurity.ssoByRoles.model.dto.Computer;
import com.study.infosecurity.ssoByRoles.service.ComputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/computer")
public class ComputerController extends ObjectControllerTemplate<Computer> {

    @Autowired
    public ComputerController(ComputerService computerService) {
        this.objectService = computerService;
    }
}