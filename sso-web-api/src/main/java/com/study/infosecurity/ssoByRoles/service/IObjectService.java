package com.study.infosecurity.ssoByRoles.service;

import java.util.List;

public interface IObjectService<T> {
    List<T> findAll();
    void save(T object);
    void deleteById(Long id);
    boolean isExists(Long id);
    boolean isExists(T object);
}
