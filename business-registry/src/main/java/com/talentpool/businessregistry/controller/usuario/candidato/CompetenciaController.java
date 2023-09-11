package com.talentpool.businessregistry.controller.usuario.candidato;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.talentpool.businessregistry.model.usuario.candidato.Competencia;
import com.talentpool.businessregistry.repository.usuario.candidato.CompetenciaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/competencias")
public class CompetenciaController {
	private static final String MESSAGE_ERROR = "Não existe competência com o id ";

	private final CompetenciaRepository competenciaRepository;

	@Autowired
	public CompetenciaController(CompetenciaRepository competenciaRepository) {
		this.competenciaRepository = competenciaRepository;
	}

	@PostMapping
	public ResponseEntity<Competencia> criarCompetencia(@RequestBody Competencia competencia) {
		Competencia novoCompetencia = competenciaRepository.save(competencia);
		return new ResponseEntity<>(novoCompetencia, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Competencia>> obterCompetencias() {
		List<Competencia> competencias = competenciaRepository.findAll();
		return new ResponseEntity<>(competencias, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Competencia> obterCompetenciaPorId(@PathVariable Long id) {
		Competencia competencia = competenciaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		if (competencia == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(competencia, HttpStatus.OK);
	}

	@GetMapping("/candidato/{id}")
	public ResponseEntity<List<Competencia>> obterCompetenciaPorCandidato(@PathVariable Long id) {
		List<Competencia> competencia = competenciaRepository.findByCandidatoId(id);
		if (competencia == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(competencia, HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Competencia> atualizarCompetencia(@PathVariable Long id,
			@RequestBody Competencia competenciaAtualizado) {
		Competencia competenciaExistente = competenciaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		if (competenciaExistente == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		competenciaExistente.setInstituicao(competenciaAtualizado.getInstituicao());
		competenciaExistente.setNivel(competenciaAtualizado.getNivel());
		competenciaExistente.setTipo(competenciaAtualizado.getTipo());
		competenciaExistente.setTitulo(competenciaAtualizado.getTitulo());
		Competencia competenciaAtualizadoNoBanco = competenciaRepository.save(competenciaExistente);
		return new ResponseEntity<>(competenciaAtualizadoNoBanco, HttpStatus.OK);
	}

	// Endpoint para excluir uma competência pelo ID
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> excluirCompetencia(@PathVariable Long id) {
		Competencia competenciaExistente = competenciaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		if (competenciaExistente == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		competenciaRepository.delete(competenciaExistente);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
