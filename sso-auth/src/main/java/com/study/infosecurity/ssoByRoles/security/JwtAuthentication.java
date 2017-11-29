package com.study.infosecurity.ssoByRoles.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import java.io.UnsupportedEncodingException;


public class JwtAuthentication {
    private String secret;
    private String USERNAME_KEY = "username";

    public JwtAuthentication(String secret) {
        this.secret = secret;
    }

    public String getAuthenticationToken(String username) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(this.secret);
            return JWT.create().withClaim(this.USERNAME_KEY, username).sign(algorithm);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return "";
    }

    public String getUsernameFromToken(String token) {
        return JWT.decode(token).getClaim(this.USERNAME_KEY).asString();
    }
}
