package com.talentpool.businessregistry.controller.vaga;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpool.businessregistry.exception.ResourceNotFoundException;
import com.talentpool.businessregistry.model.vaga.ProcessoSeletivo;
import com.talentpool.businessregistry.repository.vaga.ProcessoSeletivoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/processos")
public class ProcessoSeletivoController {

		private static final String MESSAGE_ERROR = "Não existe processo com o id ";
		
	    private final ProcessoSeletivoRepository processoRepository;

	    @Autowired
	    public ProcessoSeletivoController(ProcessoSeletivoRepository processoRepository) {
	        this.processoRepository = processoRepository;
	    }

	    @PostMapping
	    public ResponseEntity<ProcessoSeletivo> criarProcessoSeletivo(@RequestBody ProcessoSeletivo processo) {
	        ProcessoSeletivo novoProcessoSeletivo = processoRepository.save(processo);
	        return new ResponseEntity<>(novoProcessoSeletivo, CREATED);
	    }

	    @GetMapping
	    public ResponseEntity<List<ProcessoSeletivo>> obterProcessoSeletivos() {
	        List<ProcessoSeletivo> processos = processoRepository.findAll();
	        return new ResponseEntity<>(processos, OK);
	    }
	    
	    @GetMapping("/candidato/{id}")
	    public ResponseEntity<List<ProcessoSeletivo>> obterProcessoSeletivosPorCandidatoId(@PathVariable Long id) {
	        List<ProcessoSeletivo> processos = processoRepository.findProcessoByCandidatoId(id);
	        return new ResponseEntity<>(processos, OK);
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<ProcessoSeletivo> obterProcessoSeletivoPorId(@PathVariable Long id) {
	        ProcessoSeletivo processo = processoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
	        if (processo == null) {
	            return new ResponseEntity<>(NOT_FOUND);
	        }
	        return new ResponseEntity<>(processo, OK);
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<ProcessoSeletivo> atualizarProcessoSeletivo(@PathVariable Long id, @RequestBody ProcessoSeletivo processoAtualizado) {
	        ProcessoSeletivo processoExistente = processoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
	        if (processoExistente == null) {
	            return new ResponseEntity<>(NOT_FOUND);
	        }
	        processoExistente.setCandidatoAprovado(processoAtualizado.getCandidatoAprovado());
	        processoExistente.setEtapaId(processoAtualizado.getEtapaId());
	        processoExistente.setPontuacaoCandidato(processoAtualizado.getPontuacaoCandidato());
	        ProcessoSeletivo processoAtualizadaNoBanco = processoRepository.save(processoExistente);
	        return new ResponseEntity<>(processoAtualizadaNoBanco, OK);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> excluirProcessoSeletivo(@PathVariable Long id) {
	        ProcessoSeletivo processoExistente = processoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
	        if (processoExistente == null) {
	            return new ResponseEntity<>(NOT_FOUND);
	        }
	        processoRepository.delete(processoExistente);
	        return new ResponseEntity<>(NO_CONTENT);
	    }
	    
	    @DeleteMapping("/vaga/{id}")
	    public ResponseEntity<Void> deletarProcessoSeletivosPorCandidatoId(@PathVariable Long id) {
	        List<ProcessoSeletivo> processos = processoRepository.findProcessoByVagaId(id);
	        processoRepository.deleteAll(processos);
	        return ResponseEntity.noContent().build();
	    }

}
