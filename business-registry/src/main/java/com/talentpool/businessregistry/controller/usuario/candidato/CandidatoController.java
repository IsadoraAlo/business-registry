package com.talentpool.businessregistry.controller.usuario.candidato;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.talentpool.businessregistry.model.usuario.candidato.Candidato;
import com.talentpool.businessregistry.repository.usuario.candidato.CandidatoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class CandidatoController {
	
	private static final String MESSAGE_ERROR = "Não existe candidato com o id ";

	@Autowired
	CandidatoRepository candidatoRepository;

	@GetMapping("/candidatos")
	public List<Candidato> getAllCandidatos() {
		return candidatoRepository.findAll();
	}

	@PostMapping("/candidatos")
	public Candidato createCandidato(@RequestBody Candidato candidato) {
		return candidatoRepository.save(candidato);
	}

	@GetMapping("/candidatos/{id}")
	public ResponseEntity<Candidato> getCandidatoById(@PathVariable Long id) {
		Candidato candidato = candidatoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		return ResponseEntity.ok(candidato);
	}

	@PutMapping("/candidatos/{id}")
	public ResponseEntity<Candidato> updateCandidato(@PathVariable Long id, @RequestBody Candidato candidatoDetails) {
		Candidato candidato = candidatoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		candidato.setDeficiencia(candidatoDetails.getDeficiencia());
		candidato.setEtnia(candidatoDetails.getEtnia());
		candidato.setGenero(candidatoDetails.getGenero());
		candidato.setRendaFamiliar(candidatoDetails.getRendaFamiliar());
		Candidato updatedCandidato = candidatoRepository.save(candidato);
		return ResponseEntity.ok(updatedCandidato);
	}

	@DeleteMapping("/candidatos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCandidato(@PathVariable Long id) {
		Candidato candidato = candidatoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		candidatoRepository.delete(candidato);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
