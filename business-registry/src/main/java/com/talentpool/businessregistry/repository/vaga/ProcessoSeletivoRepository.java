package com.talentpool.businessregistry.repository.vaga;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpool.businessregistry.model.vaga.ProcessoSeletivo;

@Repository
public interface ProcessoSeletivoRepository extends JpaRepository<ProcessoSeletivo, Long>{
	List<ProcessoSeletivo> findProcessoByCandidatoId(Long id);
	List<ProcessoSeletivo> deleteProcessoByCandidatoId(Long id);
}
