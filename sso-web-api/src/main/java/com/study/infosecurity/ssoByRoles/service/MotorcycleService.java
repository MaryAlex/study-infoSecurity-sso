package com.study.infosecurity.ssoByRoles.service;

import com.study.infosecurity.ssoByRoles.model.dto.Computer;
import com.study.infosecurity.ssoByRoles.model.dto.Motorcycle;

import java.util.List;

/**
 * Created by Nastya on 11/25/2017.
 */
public interface MotorcycleService {
    List<Motorcycle> findAll();
    void save(Motorcycle motorcycle);
    void deleteById (Long id);
    boolean exists(Long id);
}
