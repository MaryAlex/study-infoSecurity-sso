package com.study.infosecurity.ssoByRoles.service;

public interface JwtService {
    String getToken(String username);
    String getUsernameFromToken(String token);
}
