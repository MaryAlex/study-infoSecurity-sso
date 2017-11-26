package com.study.infosecurity.ssoByRoles.model.dto

import org.hibernate.validator.constraints.Length
import javax.persistence.*
import javax.validation.constraints.NotEmpty

@Entity
class UserForDB(
        @Id
        @GeneratedValue(strategy = javax.persistence.GenerationType.AUTO)
        var id: Long,

        @Column(name = "username", unique = false, length = 255)
        @NotEmpty(message = "Please inter your username")
        var username: String,

        @Column(name = "password", unique = false)
        @Length(min = 5, message = "Your password must have at least 5 characters")
        @NotEmpty(message = "Please inter your password")
        var password: String,

        @Column(name = "roles", unique = false)
        @NotEmpty(message = "Roles please!")
        var roles: String

)