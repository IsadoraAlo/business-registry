package com.talentpool.businessregistry.repository.usuario.candidato;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpool.businessregistry.model.usuario.candidato.Competencia;

@Repository
public interface CompetenciaRepository extends JpaRepository<Competencia, Long>{

}
