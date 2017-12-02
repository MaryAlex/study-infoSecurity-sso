package com.study.infosecurity.ssoByRoles.model.poko.constant

import com.fasterxml.jackson.annotation.JsonFormat

@JsonFormat(shape = JsonFormat.Shape.NUMBER_INT)
enum class ObjectNames {
    COMPUTER,
    FLAT,
    MOTORCYCLE
}