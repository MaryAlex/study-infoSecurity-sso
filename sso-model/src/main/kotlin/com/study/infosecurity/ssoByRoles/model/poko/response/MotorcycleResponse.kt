package com.study.infosecurity.ssoByRoles.model.poko.response

import com.study.infosecurity.ssoByRoles.model.dto.Motorcycle
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode


class MotorcycleResponse @JvmOverloads constructor(val motorcycles: List<Motorcycle>,
                                                   responseCode: ResponseCode = ResponseCode.SUCCESS,
                                                   errorMessage: String = "") : CommonResponse(responseCode, errorMessage)