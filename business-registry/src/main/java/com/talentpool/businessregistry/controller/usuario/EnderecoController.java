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
import com.talentpool.businessregistry.model.usuario.Endereco;
import com.talentpool.businessregistry.repository.usuario.EnderecoRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/enderecos")
public class EnderecoController {
	private static final String MESSAGE_ERROR = "Não existe endereço com o id ";
	
    private final EnderecoRepository enderecoRepository;

    @Autowired
    public EnderecoController(EnderecoRepository enderecoRepository) {
        this.enderecoRepository = enderecoRepository;
    }

    @PostMapping
    public ResponseEntity<Endereco> criarEndereco(@RequestBody Endereco endereco) {
        Endereco novoEndereco = enderecoRepository.save(endereco);
        return new ResponseEntity<>(novoEndereco, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Endereco>> obterEnderecos() {
        List<Endereco> enderecos = enderecoRepository.findAll();
        return new ResponseEntity<>(enderecos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Endereco> obterEnderecoPorId(@PathVariable Long id) {
        Endereco endereco = enderecoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (endereco == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(endereco, HttpStatus.OK);
    }
    
    @GetMapping("/endereco/{id}")
    public ResponseEntity<List<Endereco>> obterEnderecoPorUsuario(@PathVariable Long id) {
        List<Endereco> competencia = enderecoRepository.findByUsuarioId(id);
        if (competencia == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(competencia, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Endereco> atualizarEndereco(@PathVariable Long id, @RequestBody Endereco enderecoAtualizado) {
        Endereco enderecoExistente = enderecoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (enderecoExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        enderecoExistente.setEstado(enderecoAtualizado.getEstado());
        enderecoExistente.setMunicipio(enderecoAtualizado.getMunicipio());
        enderecoExistente.setNumero(enderecoAtualizado.getNumero());
        enderecoExistente.setPais(enderecoAtualizado.getPais());
        Endereco enderecoAtualizadoNoBanco = enderecoRepository.save(enderecoExistente);
        return new ResponseEntity<>(enderecoAtualizadoNoBanco, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirEndereco(@PathVariable Long id) {
        Endereco enderecoExistente = enderecoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (enderecoExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        enderecoRepository.delete(enderecoExistente);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
