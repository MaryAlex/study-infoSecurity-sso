package com.study.infosecurity.ssoByRoles.model.poko.response

import com.study.infosecurity.ssoByRoles.model.dto.User
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode

class ValidationResponse @JvmOverloads constructor(val user: User,
                                                   responseCode: ResponseCode = ResponseCode.SUCCESS,
                                                   errorMessage: String = "") : CommonResponse(responseCode, errorMessage)
