package com.study.infosecurity.ssoByRoles.model.service.impl

import com.study.infosecurity.ssoByRoles.model.dto.User
import com.study.infosecurity.ssoByRoles.model.repository.UserRepository
import com.study.infosecurity.ssoByRoles.model.security.getHash
import com.study.infosecurity.ssoByRoles.model.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service("userService")
class UserServiceImpl @Autowired
constructor(private val userRepository: UserRepository) : UserService {

    override fun save(user: User) {
        user.password = getHash(user.password)
        this.userRepository.save(user)
    }

    override fun getByUsername(username: String): User? {
        val users = this.userRepository.findByUsername(username)
        return if (users.isEmpty()) {
            null
        } else users[0]
    }

    override fun findAll(): List<User> {
        return this.userRepository.findAll()
    }

    override fun getById(id: Long): User? {
        return this.userRepository.getOne(id)
    }
}