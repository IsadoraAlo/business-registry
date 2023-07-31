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
import com.talentpool.businessregistry.model.usuario.candidato.Competencia;
import com.talentpool.businessregistry.repository.usuario.candidato.CompetenciaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class CompetenciaController {
	
	private static final String MESSAGE_ERROR = "Não existe competencia com o id ";

	@Autowired
	CompetenciaRepository competenciaRepository;

	@GetMapping("/competencias")
	public List<Competencia> getAllCompetencias() {
		return competenciaRepository.findAll();
	}

	@PostMapping("/competencias")
	public Competencia createCompetencia(@RequestBody Competencia competencia) {
		return competenciaRepository.save(competencia);
	}

	@GetMapping("/competencias/{id}")
	public ResponseEntity<Competencia> getCompetenciaById(@PathVariable Long id) {
		Competencia competencia = competenciaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		return ResponseEntity.ok(competencia);
	}

	@PutMapping("/competencias/{id}")
	public ResponseEntity<Competencia> updateCompetencia(@PathVariable Long id, @RequestBody Competencia competenciaDetails) {
		Competencia competencia = competenciaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		competencia.setInstituicao(competenciaDetails.getInstituicao());
		competencia.setNivel(competenciaDetails.getNivel());
		competencia.setTitulo(competenciaDetails.getTitulo());
		competencia.setTipo(competenciaDetails.getTipo());
		Competencia updatedCompetencia = competenciaRepository.save(competencia);
		return ResponseEntity.ok(updatedCompetencia);
	}

	@DeleteMapping("/competencias/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCompetencia(@PathVariable Long id) {
		Competencia competencia = competenciaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		competenciaRepository.delete(competencia);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
