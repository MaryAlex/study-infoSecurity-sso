package com.study.infosecurity.SSOByRoles.model.poko.response

import com.study.infosecurity.SSOByRoles.model.poko.constant.ResponseCode

open class CommonResponse(val responseCode: ResponseCode = ResponseCode.SUCCESS, val errorMessage: String = "")
