package com.talentpool.businessregistry.controller.usuario;

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
import com.talentpool.businessregistry.model.usuario.Endereco;
import com.talentpool.businessregistry.repository.usuario.EnderecoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EnderecoController {
	
	private static final String MESSAGE_ERROR = "Não existe endereço com o id ";

	@Autowired
	EnderecoRepository enderecoRepository;

	@GetMapping("/enderecos")
	public List<Endereco> getAllEnderecos() {
		return enderecoRepository.findAll();
	}

	@PostMapping("/enderecos")
	public Endereco createEndereco(@RequestBody Endereco endereco) {
		return enderecoRepository.save(endereco);
	}

	@GetMapping("/enderecos/{id}")
	public ResponseEntity<Endereco> getEnderecoById(@PathVariable Long id) {
		Endereco endereco = enderecoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		return ResponseEntity.ok(endereco);
	}

	@PutMapping("/enderecos/{id}")
	public ResponseEntity<Endereco> updateEndereco(@PathVariable Long id, @RequestBody Endereco enderecoDetails) {
		Endereco endereco = enderecoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		endereco.setPais("Brasil");
		endereco.setEstado(enderecoDetails.getEstado());
		endereco.setMunicipio(enderecoDetails.getMunicipio());
		endereco.setNumero(enderecoDetails.getNumero());
		Endereco updatedEndereco = enderecoRepository.save(endereco);
		return ResponseEntity.ok(updatedEndereco);
	}

	@DeleteMapping("/enderecos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEndereco(@PathVariable Long id) {
		Endereco endereco = enderecoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
		enderecoRepository.delete(endereco);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
