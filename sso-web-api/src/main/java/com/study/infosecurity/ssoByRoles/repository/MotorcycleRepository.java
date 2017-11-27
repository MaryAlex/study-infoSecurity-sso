package com.study.infosecurity.ssoByRoles.repository;

import com.study.infosecurity.ssoByRoles.model.dto.Motorcycle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("motorcycleRepository")
public interface MotorcycleRepository extends JpaRepository<Motorcycle, Long>{

    void deleteById(Long id);
}