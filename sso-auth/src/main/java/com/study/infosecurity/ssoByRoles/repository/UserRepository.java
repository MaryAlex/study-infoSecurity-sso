package com.study.infosecurity.ssoByRoles.repository;

import com.study.infosecurity.ssoByRoles.model.dto.UserForDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<UserForDB, Long> {
    List<UserForDB> findByUsername(String username);
}
