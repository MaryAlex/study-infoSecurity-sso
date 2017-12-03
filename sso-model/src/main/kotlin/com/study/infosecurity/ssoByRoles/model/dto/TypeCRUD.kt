package com.study.infosecurity.ssoByRoles.model.dto

import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonManagedReference
import javax.persistence.CascadeType
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne

@Entity
data class TypeCRUD(
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long,

        @ManyToOne(cascade = arrayOf(CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH),
                fetch = FetchType.EAGER)
        @JoinColumn(name = "type_id")
        var type: Type,

        @ManyToOne(cascade = arrayOf(CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH),
                fetch = FetchType.LAZY)
        @JoinColumn(name = "role_id")
        @JsonIgnore
        var role: Role,

        @Column(name = "create_access", unique = false)
        var createAccess: Boolean,

        @Column(name = "read_access", unique = false)
        var readAccess: Boolean,

        @Column(name = "update_access", unique = false)
        var updateAccess: Boolean,

        @Column(name = "delete_access", unique = false)
        var deleteAccess: Boolean
)