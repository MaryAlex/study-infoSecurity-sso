package com.study.infosecurity.ssoByRoles.model.poko.response

import com.study.infosecurity.ssoByRoles.model.dto.Flat
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode


class FlatResponse @JvmOverloads constructor(val flats: List<Flat>,
                                             responseCode: ResponseCode = ResponseCode.SUCCESS,
                                             errorMessage: String = "") : CommonResponse(responseCode, errorMessage)