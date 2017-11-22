package com.study.infosecurity.SSOByRoles.controllers;

import com.study.infosecurity.SSOByRoles.model.dto.User;
import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello {
    private ServerProperties serverProperties;

    public Hello(ServerProperties serverProperties) {
        this.serverProperties = serverProperties;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        User user = new User(0, "Nickname", "Password");
        return "Hello! You are on port " + this.serverProperties.getPort() + "\n" + user.toString();
    }
}