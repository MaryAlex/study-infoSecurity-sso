package com.study.infosecurity.ssoByRoles.model.dto

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.validation.constraints.NotEmpty


@Entity
class Flat (
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long,

        @Column(name = "numberOfRooms", unique = false)
        @NotEmpty(message = "Please enter number Of Rooms")
        var numbersOfRoom: String,

        @Column(name = "square", unique = false)
        var square: String,

        @Column(name = "descriptioin", unique = false)
        var descriptioin: String
)