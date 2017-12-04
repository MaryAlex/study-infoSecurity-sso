package com.study.infosecurity.ssoByRoles.repository

import com.study.infosecurity.ssoByRoles.model.dto.TypeCRUD
import org.springframework.data.jpa.repository.JpaRepository

interface TypeCRUDRepository: JpaRepository<TypeCRUD, Long>