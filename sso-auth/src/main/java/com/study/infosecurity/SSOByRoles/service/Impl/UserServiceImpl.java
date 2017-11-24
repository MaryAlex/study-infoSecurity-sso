package com.study.infosecurity.SSOByRoles.service.Impl;

import com.study.infosecurity.SSOByRoles.model.dto.User;
import com.study.infosecurity.SSOByRoles.repository.UserRepository;
import com.study.infosecurity.SSOByRoles.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void save(User user) {
        // TODO: Hash password here
        this.userRepository.save(user);
    }

    @Override
    public User getByUsername(String username) {
        return this.userRepository.findByUsername(username).get(0);
    }
}
