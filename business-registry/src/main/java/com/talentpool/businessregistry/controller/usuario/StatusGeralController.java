package com.talentpool.businessregistry.controller.usuario;

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
import com.talentpool.businessregistry.model.usuario.StatusGeral;
import com.talentpool.businessregistry.repository.usuario.StatusGeralRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/status-gerais")
public class StatusGeralController {
	private static final String MESSAGE_ERROR = "Não existe usuário com o id ";
	
	@Autowired
    private StatusGeralRepository statusGeralRepository;
	
    @Autowired
    public StatusGeralController(StatusGeralRepository statusGeralRepository) {
        this.statusGeralRepository = statusGeralRepository;
    }
    
    @PostMapping
    public ResponseEntity<StatusGeral> criarStatusGeral(@RequestBody StatusGeral statusGeral) {
        StatusGeral novoStatusGeral = statusGeralRepository.save(statusGeral);
        return new ResponseEntity<>(novoStatusGeral, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<StatusGeral>> obterStatusGerals() {
        List<StatusGeral> statusGerals = statusGeralRepository.findAll();
        return new ResponseEntity<>(statusGerals, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StatusGeral> obterStatusGeralPorId(@PathVariable Long id) {
        StatusGeral statusGeral = statusGeralRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (statusGeral == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(statusGeral, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StatusGeral> atualizarStatusGeral(@PathVariable Long id, @RequestBody StatusGeral statusGeralAtualizado) {
        StatusGeral statusGeralExistente = statusGeralRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (statusGeralExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        statusGeralExistente.setMotivo(statusGeralAtualizado.getMotivo());
        statusGeralExistente.setIsUsuarioBanido(statusGeralAtualizado.getIsUsuarioBanido());
        statusGeralExistente.setIsUsuarioDesativado(statusGeralAtualizado.getIsUsuarioDesativado());
        StatusGeral statusGeralAtualizadoNoBanco = statusGeralRepository.save(statusGeralExistente);
        return new ResponseEntity<>(statusGeralAtualizadoNoBanco, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirStatusGeral(@PathVariable Long id) {
        StatusGeral statusGeralExistente = statusGeralRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (statusGeralExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        statusGeralRepository.delete(statusGeralExistente);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
