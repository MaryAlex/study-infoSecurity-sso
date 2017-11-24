package com.study.infosecurity.SSOByRoles.service.Impl;

import com.study.infosecurity.SSOByRoles.security.JwtAuthentication;
import com.study.infosecurity.SSOByRoles.service.JwtService;
import org.springframework.stereotype.Service;

@Service("jwtService")
public class JwtServiceImpl implements JwtService {
    private JwtAuthentication jwtAuthentication;

    public JwtServiceImpl() {
        this.jwtAuthentication = new JwtAuthentication();
    }

    @Override
    public String getToken(String username) {
        return this.jwtAuthentication.getAuthenticationToken(username);
    }

    @Override
    public String getUsernameFromToken(String token) {
        return this.jwtAuthentication.getUsernameFromToken(token);
    }
}
