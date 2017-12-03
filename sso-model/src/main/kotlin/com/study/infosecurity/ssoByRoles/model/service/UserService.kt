package com.study.infosecurity.ssoByRoles.model.service


import com.study.infosecurity.ssoByRoles.model.dto.User

interface UserService {
    fun save(user: User)
    fun getByUsername(username: String): User?
    fun findAll(): List<User>
    fun getById(id: Long): User?
}