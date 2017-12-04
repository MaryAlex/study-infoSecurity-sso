package com.study.infosecurity.ssoByRoles.service.Impl;

import com.study.infosecurity.ssoByRoles.model.dto.TypeCRUD;
import com.study.infosecurity.ssoByRoles.repository.TypeCRUDRepository;
import com.study.infosecurity.ssoByRoles.service.TypeCRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("typeCRUDService")
public class TypeCRUDServiceImpl implements TypeCRUDService {

    private final TypeCRUDRepository typeCRUDRepository;

    @Autowired
    public TypeCRUDServiceImpl(TypeCRUDRepository motorcycleRepository) {
        this.typeCRUDRepository = motorcycleRepository;
    }

    @Override
    public void save(TypeCRUD typeCRUD) {
        this.typeCRUDRepository.save(typeCRUD);
    }
}
