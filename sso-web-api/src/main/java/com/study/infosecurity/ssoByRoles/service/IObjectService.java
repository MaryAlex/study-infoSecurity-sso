package com.study.infosecurity.ssoByRoles.service;

import java.util.List;

public interface IObjectService<T> {
    List<T> findAll();
    void save(T object);
    void deleteById(Long id);
    void deleteByObject(T object);
    boolean isExists(Long id);
    boolean isExists(T object);
    Long getTypeID(T object);
}
