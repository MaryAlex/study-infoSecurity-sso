package com.study.infosecurity.ssoByRoles.service;

import com.study.infosecurity.ssoByRoles.model.dto.Role;

import java.util.List;

public interface RoleService {
    List<Role> findAll();
    void removeById(Long id);
    void createRole(Role role);
}
