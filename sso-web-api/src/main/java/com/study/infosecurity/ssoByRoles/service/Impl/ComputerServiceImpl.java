package com.study.infosecurity.ssoByRoles.service.Impl;

import com.study.infosecurity.ssoByRoles.model.dto.Computer;
import com.study.infosecurity.ssoByRoles.repository.ComputerRepository;
import com.study.infosecurity.ssoByRoles.service.ComputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service("computerService")
public class ComputerServiceImpl implements ComputerService {

    private final ComputerRepository computerRepository;

    @Autowired
    public ComputerServiceImpl(ComputerRepository computerRepository) {
        this.computerRepository = computerRepository;
    }

    @Override
    public List<Computer> findAll() {
        return this.computerRepository.findAll();
    }

    @Override
    public void save(Computer computer) {
        this.computerRepository.save(computer);
    }

    @Override
    public void deleteById(Long id) {
        this.computerRepository.deleteById(id);
    }

    @Override
    public boolean exists(Long id) {
        return this.computerRepository.existsById(id);
    }
}
