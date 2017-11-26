package com.study.infosecurity.ssoByRoles.service.Impl;


import com.study.infosecurity.ssoByRoles.model.dto.Motorcycle;
import com.study.infosecurity.ssoByRoles.repository.MotorcycleRepository;
import com.study.infosecurity.ssoByRoles.service.MotorcycleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service(" motorcycleService")
public class MotorcycleServiceImpl implements MotorcycleService {
    private final MotorcycleRepository motorcycleRepository;

    @Autowired
    public MotorcycleServiceImpl(MotorcycleRepository motorcycleRepository) {
        this.motorcycleRepository = motorcycleRepository;
    }

    @Override
    public List<Motorcycle> findAll() {
        return this.motorcycleRepository.findAll();
    }

    @Override
    public void save(Motorcycle motorcycle) {
        this.motorcycleRepository.save(motorcycle);
    }

    @Override
    public void deleteById(Long id) {
        this.motorcycleRepository.deleteById(id);
    }

    @Override
    public boolean exists(Long id) {
        return this.motorcycleRepository.existsById(id);
    }
}
