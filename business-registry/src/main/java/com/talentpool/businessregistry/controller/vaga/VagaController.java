package com.talentpool.businessregistry.controller.vaga;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpool.businessregistry.exception.ResourceNotFoundException;
import com.talentpool.businessregistry.model.vaga.Vaga;
import com.talentpool.businessregistry.repository.vaga.VagaRepository;

@RestController
@RequestMapping("/vagas")
public class VagaController {
	private static final String MESSAGE_ERROR = "Não existe vaga com o id ";
	
    private final VagaRepository vagaRepository;

    @Autowired
    public VagaController(VagaRepository vagaRepository) {
        this.vagaRepository = vagaRepository;
    }

    // Endpoint para criar uma nova vaga
    @PostMapping
    public ResponseEntity<Vaga> criarVaga(@RequestBody Vaga vaga) {
        Vaga novoVaga = vagaRepository.save(vaga);
        return new ResponseEntity<>(novoVaga, HttpStatus.CREATED);
    }

    // Endpoint para obter todas as vagas
    @GetMapping
    public ResponseEntity<List<Vaga>> obterVagas() {
        List<Vaga> vagas = vagaRepository.findAll();
        return new ResponseEntity<>(vagas, HttpStatus.OK);
    }

    // Endpoint para obter uma vaga pelo ID
    @GetMapping("/{id}")
    public ResponseEntity<Vaga> obterVagaPorId(@PathVariable Long id) {
        Vaga vaga = vagaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (vaga == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(vaga, HttpStatus.OK);
    }

    // Endpoint para atualizar uma vaga existente
    @PutMapping("/{id}")
    public ResponseEntity<Vaga> atualizarVaga(@PathVariable Long id, @RequestBody Vaga vagaAtualizada) {
        Vaga vagaExistente = vagaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (vagaExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        vagaExistente.setAreaAtuacao(vagaAtualizada.getAreaAtuacao());
        vagaExistente.setBeneficios(vagaAtualizada.getBeneficios());
        vagaExistente.setCandidatos(vagaAtualizada.getCandidatos());
        vagaExistente.setCargo(vagaAtualizada.getCargo());
        vagaExistente.setEtapas(vagaAtualizada.getEtapas());
        vagaExistente.setInclusao(vagaAtualizada.getInclusao());
        vagaExistente.setInfoAdicional(vagaAtualizada.getInfoAdicional());
        vagaExistente.setQualificacoes(vagaAtualizada.getQualificacoes());
        vagaExistente.setStatus(vagaAtualizada.getStatus());
        vagaExistente.setTitulo(vagaAtualizada.getTitulo());   
        Vaga vagaAtualizadaNoBanco = vagaRepository.save(vagaExistente);
        return new ResponseEntity<>(vagaAtualizadaNoBanco, HttpStatus.OK);
    }

    // Endpoint para excluir uma vaga pelo ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirVaga(@PathVariable Long id) {
        Vaga vagaExistente = vagaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (vagaExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        vagaRepository.delete(vagaExistente);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
