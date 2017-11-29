package com.study.infosecurity.ssoByRoles.service.Impl;

import com.study.infosecurity.ssoByRoles.security.JwtAuthentication;
import com.study.infosecurity.ssoByRoles.service.JwtService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service("jwtService")
public class JwtServiceImpl implements JwtService {
    private JwtAuthentication jwtAuthentication;

    public JwtServiceImpl(@Value("${secret}") String secret) {
        this.jwtAuthentication = new JwtAuthentication(secret);
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
