package com.study.infosecurity.ssoByRoles.repository;

import com.study.infosecurity.ssoByRoles.model.dto.Flat;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository("flatRepository")
public interface FlatRepository extends JpaRepository<Flat, Long> {
    void deleteById(@NotNull Long id);
}