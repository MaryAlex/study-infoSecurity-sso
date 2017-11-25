package com.study.infosecurity.ssoByRoles.model.poko.response

import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode

open class CommonResponse(val responseCode: ResponseCode = ResponseCode.SUCCESS, val errorMessage: String = "")
