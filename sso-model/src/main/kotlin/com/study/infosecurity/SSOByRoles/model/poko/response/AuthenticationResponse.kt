package com.study.infosecurity.SSOByRoles.model.poko.response

import com.study.infosecurity.SSOByRoles.model.dto.User
import com.study.infosecurity.SSOByRoles.model.poko.constant.ResponseCode


class AuthenticationResponse @JvmOverloads constructor(val user: User,
                                                       val token: String,
                                                       responseCode: ResponseCode = ResponseCode.SUCCESS,
                                                       errorMessage: String = "") : CommonResponse(responseCode, errorMessage)