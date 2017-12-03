package com.study.infosecurity.ssoByRoles.repository;

import com.study.infosecurity.ssoByRoles.model.dto.Type;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ObjectNames;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("typeRepository")
public interface TypeRepository extends JpaRepository<Type, Long> {
    List<Type> findByBelonging(ObjectNames objectName);
}
