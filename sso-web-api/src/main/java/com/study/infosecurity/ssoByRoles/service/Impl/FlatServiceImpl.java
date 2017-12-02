package com.study.infosecurity.ssoByRoles.service.Impl;

import com.study.infosecurity.ssoByRoles.model.dto.Flat;
import com.study.infosecurity.ssoByRoles.repository.FlatRepository;
import com.study.infosecurity.ssoByRoles.service.FlatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("flatService")
public class FlatServiceImpl implements FlatService {

    private final FlatRepository flatRepository;

    @Autowired
    public FlatServiceImpl(FlatRepository flatRepository) {
        this.flatRepository = flatRepository;
    }

    @Override
    public List<Flat> findAll() {
        return this.flatRepository.findAll();
    }

    @Override
    public void save(Flat flat) {
        this.flatRepository.save(flat);
    }

    @Override
    public void deleteById(Long id) {
        this.flatRepository.deleteById(id);
    }

    @Override
    public void deleteByObject(Flat flat) {
        this.deleteById(flat.getId());
    }

    @Override
    public boolean isExists(Long id) {
        return this.flatRepository.existsById(id);
    }

    @Override
    public boolean isExists(Flat flat) {
        return this.isExists(flat.getId());
    }

    @Override
    public Long getTypeID(Flat flat) {
        return flat.getType().getId();
    }
}