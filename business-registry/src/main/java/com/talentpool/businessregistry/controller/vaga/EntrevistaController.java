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
import com.talentpool.businessregistry.model.vaga.Entrevista;
import com.talentpool.businessregistry.repository.vaga.EntrevistaRepository;

@RestController
@RequestMapping("/entrevistas")
public class EntrevistaController {
	private static final String MESSAGE_ERROR = "Não existe entrevista com o id ";
	
    private final EntrevistaRepository entrevistaRepository;

    @Autowired
    public EntrevistaController(EntrevistaRepository entrevistaRepository) {
        this.entrevistaRepository = entrevistaRepository;
    }

    // Endpoint para criar uma nova entrevista
    @PostMapping
    public ResponseEntity<Entrevista> criarEntrevista(@RequestBody Entrevista entrevista) {
        Entrevista novoEntrevista = entrevistaRepository.save(entrevista);
        return new ResponseEntity<>(novoEntrevista, HttpStatus.CREATED);
    }

    // Endpoint para obter todas as entrevistas
    @GetMapping
    public ResponseEntity<List<Entrevista>> obterEntrevistas() {
        List<Entrevista> entrevistas = entrevistaRepository.findAll();
        return new ResponseEntity<>(entrevistas, HttpStatus.OK);
    }

    // Endpoint para obter uma entrevista pelo ID
    @GetMapping("/{id}")
    public ResponseEntity<Entrevista> obterEntrevistaPorId(@PathVariable Long id) {
        Entrevista entrevista = entrevistaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (entrevista == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(entrevista, HttpStatus.OK);
    }

    // Endpoint para atualizar uma entrevista existente
    @PutMapping("/{id}")
    public ResponseEntity<Entrevista> atualizarEntrevista(@PathVariable Long id, @RequestBody Entrevista entrevistaAtualizada) {
        Entrevista entrevistaExistente = entrevistaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (entrevistaExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        entrevistaExistente.setData(entrevistaAtualizada.getData());
        entrevistaExistente.setDescricao(entrevistaAtualizada.getDescricao());
        entrevistaExistente.setLink(entrevistaAtualizada.getLink());
        Entrevista entrevistaAtualizadaNoBanco = entrevistaRepository.save(entrevistaExistente);
        return new ResponseEntity<>(entrevistaAtualizadaNoBanco, HttpStatus.OK);
    }

    // Endpoint para excluir uma entrevista pelo ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirEntrevista(@PathVariable Long id) {
        Entrevista entrevistaExistente = entrevistaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (entrevistaExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        entrevistaRepository.delete(entrevistaExistente);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
