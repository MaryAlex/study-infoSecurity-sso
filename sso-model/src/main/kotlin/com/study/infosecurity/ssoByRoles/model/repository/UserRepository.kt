package com.study.infosecurity.ssoByRoles.model.repository

import com.study.infosecurity.ssoByRoles.model.dto.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository("userRepository")
interface UserRepository : JpaRepository<User, Long> {
    fun findByUsername(username: String): List<User>
}