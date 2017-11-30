package com.study.infosecurity.ssoByRoles.model.dto

import com.study.infosecurity.ssoByRoles.model.poko.constant.ObjectNames
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.validation.constraints.NotEmpty

@Entity
data class Type(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long,

        @Column(name = "name", unique = false)
        @NotEmpty(message = "Please inter type name")
        var name: String,

        @Column(name = "belonging", unique = false)
        @NotEmpty(message = "There must be object")
        var belonging: ObjectNames
)