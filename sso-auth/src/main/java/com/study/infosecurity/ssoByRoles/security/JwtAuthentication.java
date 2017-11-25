package com.study.infosecurity.ssoByRoles.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import java.io.UnsupportedEncodingException;


// TODO: Strings to constants
public class JwtAuthentication {
    public String getAuthenticationToken(String username) {
        try {
            // TODO: Secret must be in properties
            Algorithm algorithm = Algorithm.HMAC256("secret");
            return JWT.create().withClaim("username", username).sign(algorithm);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return "";
    }

    public String getUsernameFromToken(String token) {
        return JWT.decode(token).getClaim("username").asString();
    }
}
