package com.study.infosecurity.ssoByRoles.service;

import com.study.infosecurity.ssoByRoles.model.dto.Type;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ObjectNames;

import java.util.List;

public interface TypeService {
    List<Type> findAll();
    List<Type> findByBelonging(ObjectNames objectName);
}
