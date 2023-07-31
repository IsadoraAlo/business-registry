package com.talentpool.businessregistry.repository.vaga;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpool.businessregistry.model.vaga.Vaga;

@Repository
public interface VagaRepository extends JpaRepository<Vaga, Long>{

}
