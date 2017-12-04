package com.study.infosecurity.ssoByRoles.model.dto

import javax.persistence.CascadeType
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.validation.constraints.NotEmpty


@Entity
data class Flat(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long,

        @Column(name = "numberOfRooms", unique = false)
        @NotEmpty(message = "Please enter number Of Rooms")
        var numbersOfRoom: Int,

        @Column(name = "square", unique = false)
        var square: Int,

        @Column(name = "description", unique = false)
        var description: String,

        @ManyToOne(cascade = arrayOf(CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH),
                fetch = FetchType.EAGER)
        @JoinColumn(name = "type_id")
        var type: Type
)