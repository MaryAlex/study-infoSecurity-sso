package com.study.infosecurity.SSOByRoles.service;

public interface JwtService {
    String getToken(String username);
    String getUsernameFromToken(String token);
}
