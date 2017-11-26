package com.study.infosecurity.ssoByRoles.model.poko.response

import com.study.infosecurity.ssoByRoles.model.dto.Computer
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode

/**
 * Created by Nastya on 11/25/2017.
 */
class ComputerResponse @JvmOverloads constructor(val computers: List<Computer>,
                                                 responseCode: ResponseCode = ResponseCode.SUCCESS,
                                                 errorMessage: String = "") : CommonResponse(responseCode, errorMessage)