package com.study.infosecurity.ssoByRoles.service;


import com.study.infosecurity.ssoByRoles.model.dto.User;

public interface UserService {
    void save(User user);
    User getByUsername(String username);
}
