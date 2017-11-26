package com.study.infosecurity.ssoByRoles.controllers;

import com.study.infosecurity.ssoByRoles.model.dto.User;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode;
import com.study.infosecurity.ssoByRoles.model.poko.response.AuthenticationResponse;
import com.study.infosecurity.ssoByRoles.model.poko.response.CommonResponse;
import com.study.infosecurity.ssoByRoles.service.JwtService;
import com.study.infosecurity.ssoByRoles.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MainAuthController {
    private UserService userService;
    private JwtService jwtService;

    @Autowired
    public MainAuthController(UserService userService, JwtService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        return "Hello! You are on port in Auth service";
    }

    @RequestMapping(value = "/authentication", method = RequestMethod.GET)
    public CommonResponse authentication(@RequestParam String username,
                                         @RequestParam String password) {
        User user = this.userService.getByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return new AuthenticationResponse(user, this.jwtService.getToken(username));
        }
        return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
    }

    @RequestMapping(value = "/validation", method = RequestMethod.GET)
    public CommonResponse validation(@RequestParam String token) {
        return new CommonResponse();
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public CommonResponse addUser(@RequestBody User user) {
        try{
            userService.save(user);
            return new CommonResponse(ResponseCode.SUCCESS, "User succesfully added");
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }
}
