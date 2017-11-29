package com.study.infosecurity.ssoByRoles.repository;


import com.study.infosecurity.ssoByRoles.model.dto.Computer;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("computerRepository")
public interface ComputerRepository extends JpaRepository<Computer, Long> {
    void deleteById(@NotNull Long id);
}