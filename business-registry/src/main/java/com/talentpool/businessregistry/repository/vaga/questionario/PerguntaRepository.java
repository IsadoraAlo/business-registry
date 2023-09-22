package com.talentpool.businessregistry.repository.vaga.questionario;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpool.businessregistry.model.vaga.questionario.Pergunta;

@Repository
public interface PerguntaRepository extends JpaRepository<Pergunta, Long>{
	List<Pergunta> findPerguntaByQuestionarioId(Long id);
}
