package com.talentpool.businessregistry.repository.vaga.questionario;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpool.businessregistry.model.vaga.questionario.Resposta;

@Repository
public interface RespostaRepository extends JpaRepository<Resposta, Long>{
	List<Resposta> findRespostaByPerguntaId(Long id);
}
