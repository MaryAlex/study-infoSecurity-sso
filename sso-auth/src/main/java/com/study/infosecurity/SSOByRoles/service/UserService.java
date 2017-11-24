package com.study.infosecurity.SSOByRoles.service;


import com.study.infosecurity.SSOByRoles.model.dto.User;

public interface UserService {
    void save(User user);
    User getByUsername(String username);
}
