package com.study.infosecurity.ssoByRoles.contollers;

import com.study.infosecurity.ssoByRoles.model.dto.User;
import com.study.infosecurity.ssoByRoles.model.poko.constant.Roles;
import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Hello {
    private ServerProperties serverProperties;

    public Hello(ServerProperties serverProperties) {
        this.serverProperties = serverProperties;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        List<Roles> roles = new ArrayList<>();
        User user = new User(0, "Nickname", "Password", roles);
        return "Hello! You are on port " + this.serverProperties.getPort() + "\n" + user.toString();
    }
}