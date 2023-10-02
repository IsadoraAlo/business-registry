package com.talentpool.businessregistry.repository.vaga;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpool.businessregistry.model.vaga.Vaga;

@Repository
public interface VagaRepository extends JpaRepository<Vaga, Long>{
	List<Vaga> findVagaByUsuarioId(Long id);
    List<Vaga> findVagaByModalidade(String modalidade);
    List<Vaga> findVagaByCargo(String cargo);
    List<Vaga> findVagaByAreaAtuacao(String areaAtuacao);
    List<Vaga> findVagaByEtnia(String etnia);
    List<Vaga> findVagaByGenero(String genero);
    List<Vaga> findVagaByDeficiencia(String deficiencia);
}
