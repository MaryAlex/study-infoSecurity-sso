package com.study.infosecurity.ssoByRoles.model.poko

import com.study.infosecurity.ssoByRoles.model.dto.Role

data class UpdateRolesRequest(val userId: Long,
                              val roles: List<Role>)