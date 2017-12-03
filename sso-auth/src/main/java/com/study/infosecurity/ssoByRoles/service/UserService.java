package com.study.infosecurity.ssoByRoles.service;


import com.study.infosecurity.ssoByRoles.model.dto.User;

import java.util.List;

public interface UserService {
    void save(User user);
    User getByUsername(String username);
    List<User> findAll();
    User getById(Long id);
}