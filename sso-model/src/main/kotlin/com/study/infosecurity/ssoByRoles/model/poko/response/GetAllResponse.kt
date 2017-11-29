package com.study.infosecurity.ssoByRoles.model.poko.response

import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode

class GetAllResponse<out T> @JvmOverloads constructor(val objects: List<T>,
                                                      responseCode: ResponseCode = ResponseCode.SUCCESS,
                                                      errorMessage: String = "") : CommonResponse(responseCode, errorMessage)