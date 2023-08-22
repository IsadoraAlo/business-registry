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
import com.talentpool.businessregistry.model.usuario.candidato.Candidato;
import com.talentpool.businessregistry.repository.usuario.candidato.CandidatoRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/candidatos")
public class CandidatoController {
	private static final String MESSAGE_ERROR = "Não existe candidato com o id ";
	
    private final CandidatoRepository candidatoRepository;

    @Autowired
    public CandidatoController(CandidatoRepository candidatoRepository) {
        this.candidatoRepository = candidatoRepository;
    }

    // Endpoint para criar um novo candidato
    @PostMapping
    public ResponseEntity<Candidato> criarCandidato(@RequestBody Candidato candidato) {
        Candidato novoCandidato = candidatoRepository.save(candidato);
        return new ResponseEntity<>(novoCandidato, HttpStatus.CREATED);
    }

    // Endpoint para obter todos os candidatos
    @GetMapping
    public ResponseEntity<List<Candidato>> obterCandidatos() {
        List<Candidato> candidatos = candidatoRepository.findAll();
        return new ResponseEntity<>(candidatos, HttpStatus.OK);
    }

    // Endpoint para obter um candidato pelo ID
    @GetMapping("/{id}")
    public ResponseEntity<Candidato> obterCandidatoPorId(@PathVariable Long id) {
        Candidato candidato = candidatoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (candidato == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(candidato, HttpStatus.OK);
    }

    // Endpoint para atualizar um candidato existente
    @PutMapping("/{id}")
    public ResponseEntity<Candidato> atualizarCandidato(@PathVariable Long id, @RequestBody Candidato candidatoAtualizado) {
        Candidato candidatoExistente = candidatoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (candidatoExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        candidatoExistente.setDeficiencia(candidatoAtualizado.getDeficiencia());
        candidatoExistente.setEtnia(candidatoAtualizado.getEtnia());
        candidatoExistente.setGenero(candidatoAtualizado.getGenero());
        candidatoExistente.setRendaFamiliar(candidatoAtualizado.getRendaFamiliar());
        candidatoExistente.setUsuario(candidatoAtualizado.getUsuario());
        Candidato candidatoAtualizadoNoBanco = candidatoRepository.save(candidatoExistente);
        return new ResponseEntity<>(candidatoAtualizadoNoBanco, HttpStatus.OK);
    }

    // Endpoint para excluir um candidato pelo ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirCandidato(@PathVariable Long id) {
        Candidato candidatoExistente = candidatoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (candidatoExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        candidatoRepository.delete(candidatoExistente);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
