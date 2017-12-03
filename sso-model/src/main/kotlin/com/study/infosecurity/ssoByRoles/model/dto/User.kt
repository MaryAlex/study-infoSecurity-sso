package com.study.infosecurity.ssoByRoles.model.dto

import com.fasterxml.jackson.annotation.JsonIgnore
import org.hibernate.validator.constraints.Length
import javax.persistence.CascadeType
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.JoinTable
import javax.persistence.ManyToMany
import javax.validation.constraints.NotEmpty

@Entity
data class User(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long,

        @Column(name = "username", unique = true, length = 255)
        @NotEmpty(message = "Please inter your username")
        var username: String,

        @Column(name = "password", unique = false)
        @Length(min = 5, message = "Your password must have at least 5 characters")
        @NotEmpty(message = "Please inter your password")
        @JsonIgnore
        var password: String,

        @ManyToMany(fetch = FetchType.EAGER,
                cascade = arrayOf(CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH))
        @JoinTable(
                name = "user_role",
                joinColumns = arrayOf(JoinColumn(name = "user_id")),
                inverseJoinColumns = arrayOf(JoinColumn(name = "role_id"))
        )
        var roles: List<Role> = mutableListOf()
)