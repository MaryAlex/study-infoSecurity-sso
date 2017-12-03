package com.study.infosecurity.ssoByRoles.service.Impl;

import com.study.infosecurity.ssoByRoles.model.dto.Role;
import com.study.infosecurity.ssoByRoles.repository.RoleRepository;
import com.study.infosecurity.ssoByRoles.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("roleService")
public class RoleServiceImpl implements RoleService {
    private final RoleRepository roleRepository;

    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public List<Role> findAll() {
        return this.roleRepository.findAll();
    }

    @Override
    public void removeById(Long id) {
        this.roleRepository.deleteById(id);
    }
}
