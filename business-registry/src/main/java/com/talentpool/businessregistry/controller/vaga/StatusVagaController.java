package com.talentpool.businessregistry.controller.vaga;

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
import com.talentpool.businessregistry.model.vaga.StatusVaga;
import com.talentpool.businessregistry.repository.vaga.StatusVagaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/status-vagas")
public class StatusVagaController {
	private static final String MESSAGE_ERROR = "Não existe usuário com o id ";

	@Autowired
	private StatusVagaRepository statusVagaRepository;

	@Autowired
	public StatusVagaController(StatusVagaRepository statusVagaRepository) {
		this.statusVagaRepository = statusVagaRepository;
	}

	@PostMapping
	public ResponseEntity<StatusVaga> criarStatusVaga(@RequestBody StatusVaga statusVaga) {
		StatusVaga novoStatusVaga = statusVagaRepository.save(statusVaga);
		return new ResponseEntity<>(novoStatusVaga, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<StatusVaga>> obterStatusVagas() {
		List<StatusVaga> statusVagas = statusVagaRepository.findAll();
		return new ResponseEntity<>(statusVagas, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<StatusVaga> obterStatusVagaPorId(@PathVariable Long id) {
		StatusVaga statusVaga = statusVagaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		if (statusVaga == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(statusVaga, HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<StatusVaga> atualizarStatusVaga(@PathVariable Long id,
			@RequestBody StatusVaga statusVagaAtualizado) {
		StatusVaga statusVagaExistente = statusVagaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		if (statusVagaExistente == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		statusVagaExistente.setIsVagaInativa(statusVagaAtualizado.getIsVagaInativa());
		StatusVaga statusVagaAtualizadoNoBanco = statusVagaRepository.save(statusVagaExistente);
		return new ResponseEntity<>(statusVagaAtualizadoNoBanco, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> excluirStatusVaga(@PathVariable Long id) {
		StatusVaga statusVagaExistente = statusVagaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		if (statusVagaExistente == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		statusVagaRepository.delete(statusVagaExistente);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
