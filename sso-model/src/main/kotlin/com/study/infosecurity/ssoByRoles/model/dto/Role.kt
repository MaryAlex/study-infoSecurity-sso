package com.study.infosecurity.ssoByRoles.model.dto

import javax.persistence.CascadeType
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.OneToMany
import javax.validation.constraints.NotEmpty

@Entity
data class Role(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long,

        @Column(name = "name", unique = true)
        @NotEmpty(message = "Role must have name")
        var name: String,

        @OneToMany(mappedBy = "role", cascade = arrayOf(CascadeType.ALL), fetch = FetchType.EAGER)
        var typeCRUDs: List<TypeCRUD> = emptyList()
)