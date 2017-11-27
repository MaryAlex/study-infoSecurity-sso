package com.study.infosecurity.ssoByRoles.model.dto

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.validation.constraints.NotEmpty

@Entity
class Motorcycle (

        @Id
        @GeneratedValue(strategy = javax.persistence.GenerationType.AUTO)
        var id: Long,

        @Column(name = "firm", unique = false)
        @NotEmpty(message = "Please enter firm")
        var firm: String,

        @Column(name = "model", unique = false)
        var model: String,

        @Column(name = "width", unique = false)
        var width: String,

        @Column(name = "height", unique = false)
        var height: String,

        @Column(name = "displacement", unique = false)
        var displacement: String
)