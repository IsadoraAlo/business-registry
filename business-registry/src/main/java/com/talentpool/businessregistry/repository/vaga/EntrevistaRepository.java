package com.talentpool.businessregistry.repository.vaga;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpool.businessregistry.model.vaga.Entrevista;

@Repository
public interface EntrevistaRepository extends JpaRepository<Entrevista, Long> {
	
}
