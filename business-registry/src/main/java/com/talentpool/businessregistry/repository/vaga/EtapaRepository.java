package com.talentpool.businessregistry.repository.vaga;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpool.businessregistry.model.vaga.Etapa;

@Repository
public interface EtapaRepository extends JpaRepository<Etapa, Long>{
	List<Etapa> findEtapaByVagaId(Long id);
}
