package com.study.infosecurity.ssoByRoles.service.Impl;

import com.study.infosecurity.ssoByRoles.model.dto.Type;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ObjectNames;
import com.study.infosecurity.ssoByRoles.repository.TypeRepository;
import com.study.infosecurity.ssoByRoles.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("typeService")
public class TypeServiceImpl implements TypeService {
    private final TypeRepository typeRepository;

    @Autowired
    public TypeServiceImpl(TypeRepository typeRepository) {
        this.typeRepository = typeRepository;
    }

    @Override
    public List<Type> findAll() {
        return this.typeRepository.findAll();
    }

    @Override
    public List<Type> findByBelonging(ObjectNames objectName) {
        return this.typeRepository.findByBelonging(objectName);
    }
}
