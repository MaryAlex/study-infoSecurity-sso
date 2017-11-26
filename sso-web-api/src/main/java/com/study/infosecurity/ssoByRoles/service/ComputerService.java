package com.study.infosecurity.ssoByRoles.service;

import com.study.infosecurity.ssoByRoles.model.dto.Computer;

import java.util.List;

/**
 * Created by Nastya on 11/25/2017.
 */
public interface ComputerService {
    List<Computer> findAll();
    void save(Computer computer);
    void deleteById (Long id);
    boolean exists(Long id);
}
