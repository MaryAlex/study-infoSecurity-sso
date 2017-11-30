package com.study.infosecurity.ssoByRoles.repository;

import com.study.infosecurity.ssoByRoles.model.dto.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByUsername(String username);
}