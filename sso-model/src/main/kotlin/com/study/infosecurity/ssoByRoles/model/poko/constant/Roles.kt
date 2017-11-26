package com.study.infosecurity.ssoByRoles.model.poko.constant

import com.fasterxml.jackson.annotation.JsonFormat


@JsonFormat(shape = JsonFormat.Shape.NUMBER_INT)
enum class Roles {
    ADMIN,
    COMPUTER_WRITE,
    FLAT_WRITE,
    MOTORCYCLE_WRITE
}