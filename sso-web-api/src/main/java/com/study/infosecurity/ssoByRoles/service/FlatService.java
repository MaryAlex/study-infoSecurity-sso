package com.study.infosecurity.ssoByRoles.service;

import com.study.infosecurity.ssoByRoles.model.dto.Flat;

import java.util.List;

/**
 * Created by Nastya on 11/25/2017.
 */
public interface FlatService {
    List<Flat> findAll();
    void save(Flat flat);
    void deleteById (Long id);
    boolean exists(Long id);
}
