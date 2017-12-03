package com.study.infosecurity.ssoByRoles.model.poko.response

import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode

class AddResponse @JvmOverloads constructor(val id: Long,
                                            responseCode: ResponseCode = ResponseCode.SUCCESS,
                                            errorMessage: String = "") : CommonResponse(responseCode, errorMessage)