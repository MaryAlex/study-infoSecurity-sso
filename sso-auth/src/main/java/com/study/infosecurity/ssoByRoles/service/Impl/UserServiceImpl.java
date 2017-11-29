package com.study.infosecurity.ssoByRoles.service.Impl;

import com.study.infosecurity.ssoByRoles.model.dto.User;
import com.study.infosecurity.ssoByRoles.model.dto.UserForDB;
import com.study.infosecurity.ssoByRoles.model.poko.constant.Roles;
import com.study.infosecurity.ssoByRoles.repository.UserRepository;
import com.study.infosecurity.ssoByRoles.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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
        this.userRepository.save(convertUserToUserForDb(user));
    }

    @Override
    public User getByUsername(String username) {
        List<UserForDB> users = this.userRepository.findByUsername(username);
        if (users.isEmpty()) {
            return null;
        }
        return convertUserForDbToUser(users.get(0));
    }


    // TODO: Fix, when will do roles
    private User convertUserForDbToUser (UserForDB userForDB){
        List<Roles> roles = Arrays.asList(userForDB.getRoles().split("\\s*,\\s*")).stream().map(Roles::valueOf).collect(Collectors.toList());
        return  new User(userForDB.getId(), userForDB.getUsername(), userForDB.getPassword(), roles);
    }

    // TODO: Fix, when will do roles
    private UserForDB convertUserToUserForDb (User user){
        List<String> roles = user.getRoles().stream().map(Roles::name).collect(Collectors.toList());
        return new UserForDB(user.getId(), user.getUsername(), user.getPassword(), String.join(",", roles));
    }

}