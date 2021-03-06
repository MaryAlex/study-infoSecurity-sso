package com.study.infosecurity.ssoByRoles.controllers;

import com.study.infosecurity.ssoByRoles.model.dto.User;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode;
import com.study.infosecurity.ssoByRoles.model.poko.response.AuthenticationResponse;
import com.study.infosecurity.ssoByRoles.model.poko.response.CommonResponse;
import com.study.infosecurity.ssoByRoles.model.poko.response.ValidationResponse;
import com.study.infosecurity.ssoByRoles.service.JwtService;
import com.study.infosecurity.ssoByRoles.model.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.study.infosecurity.ssoByRoles.model.security.SecurityUtilsKt.getHash;

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
        if (user == null) {
            return new CommonResponse(ResponseCode.ERROR, "There is no such user");
        }
        if (!user.getPassword().equals(getHash(password))) {
            return new CommonResponse(ResponseCode.ERROR, "Wrong password");
        }
        return new AuthenticationResponse(user, this.jwtService.getToken(username));
    }

    @RequestMapping(value = "/validation", method = RequestMethod.GET)
    public CommonResponse validation(@RequestParam String token) {
        User user = this.userService.getByUsername(this.jwtService.getUsernameFromToken(token));
        if (user == null) {
            return new CommonResponse(ResponseCode.AUTHENTICATION_FAIL_ERROR, "There is no such user");
        }
        return new ValidationResponse(user);
    }
}