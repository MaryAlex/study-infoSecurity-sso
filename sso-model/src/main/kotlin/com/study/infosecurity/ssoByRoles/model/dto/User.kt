package com.study.infosecurity.ssoByRoles.model.dto

import com.study.infosecurity.ssoByRoles.model.poko.constant.Roles



data class User(

        var id: Long,

        var username: String,

        var password: String,

        var roles: List<Roles>

)