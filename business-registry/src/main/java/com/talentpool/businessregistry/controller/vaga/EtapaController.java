package com.talentpool.businessregistry.controller.vaga;

import static org.springframework.http.HttpStatus.OK;

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
import com.talentpool.businessregistry.model.vaga.Etapa;
import com.talentpool.businessregistry.repository.vaga.EtapaRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/etapas")
public class EtapaController {
	private static final String MESSAGE_ERROR = "Não existe etapa com o id ";
	
    private final EtapaRepository etapaRepository;

    @Autowired
    public EtapaController(EtapaRepository etapaRepository) {
        this.etapaRepository = etapaRepository;
    }

    @PostMapping
    public ResponseEntity<Etapa> criarEtapa(@RequestBody Etapa etapa) {
        Etapa novoEtapa = etapaRepository.save(etapa);
        return new ResponseEntity<>(novoEtapa, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Etapa>> obterEtapas() {
        List<Etapa> etapas = etapaRepository.findAll();
        return new ResponseEntity<>(etapas, HttpStatus.OK);
    }
    
    @GetMapping("/vaga/{id}")
    public ResponseEntity<List<Etapa>> obterProcessoSeletivosPorCandidatoId(@PathVariable Long id) {
        List<Etapa> etapas = etapaRepository.findEtapaByVagaId(id);
        return new ResponseEntity<>(etapas, OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Etapa> obterEtapaPorId(@PathVariable Long id) {
        Etapa etapa = etapaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (etapa == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(etapa, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Etapa> atualizarEtapa(@PathVariable Long id, @RequestBody Etapa etapaAtualizada) {
        Etapa etapaExistente = etapaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (etapaExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        etapaExistente.setDescricao(etapaAtualizada.getDescricao());
        etapaExistente.setNumeracao(etapaAtualizada.getNumeracao());
        etapaExistente.setNumeracao(etapaAtualizada.getNumeracao());
        etapaExistente.setTipo(etapaAtualizada.getTipo());
        Etapa etapaAtualizadaNoBanco = etapaRepository.save(etapaExistente);
        return new ResponseEntity<>(etapaAtualizadaNoBanco, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirEtapa(@PathVariable Long id) {
        Etapa etapaExistente = etapaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (etapaExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        etapaRepository.delete(etapaExistente);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
