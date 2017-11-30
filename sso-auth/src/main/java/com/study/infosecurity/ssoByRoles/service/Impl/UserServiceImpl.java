package com.study.infosecurity.ssoByRoles.service.Impl;

import com.study.infosecurity.ssoByRoles.model.dto.User;
import com.study.infosecurity.ssoByRoles.repository.UserRepository;
import com.study.infosecurity.ssoByRoles.security.SecurityUtils;
import com.study.infosecurity.ssoByRoles.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userService")
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void save(User user) {
        user.setPassword(SecurityUtils.getHash(user.getPassword()));
        this.userRepository.save(user);
    }

    @Override
    public User getByUsername(String username) {
        List<User> users = this.userRepository.findByUsername(username);
        if (users.isEmpty()) {
            return null;
        }
        return users.get(0);
    }
}