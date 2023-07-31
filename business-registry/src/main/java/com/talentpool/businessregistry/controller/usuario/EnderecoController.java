package com.talentpool.businessregistry.controller.usuario;

import com.talentpool.businessregistry.exception.ResourceNotFoundException;
import com.talentpool.businessregistry.model.usuario.Endereco;
import com.talentpool.businessregistry.repository.usuario.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enderecos")
public class EnderecoController {
	private static final String MESSAGE_ERROR = "Não existe endereço com o id ";
	
    private final EnderecoRepository enderecoRepository;

    @Autowired
    public EnderecoController(EnderecoRepository enderecoRepository) {
        this.enderecoRepository = enderecoRepository;
    }

    // Endpoint para criar um novo endereço
    @PostMapping
    public ResponseEntity<Endereco> criarEndereco(@RequestBody Endereco endereco) {
        Endereco novoEndereco = enderecoRepository.save(endereco);
        return new ResponseEntity<>(novoEndereco, HttpStatus.CREATED);
    }

    // Endpoint para obter todos os endereços
    @GetMapping
    public ResponseEntity<List<Endereco>> obterEnderecos() {
        List<Endereco> enderecos = enderecoRepository.findAll();
        return new ResponseEntity<>(enderecos, HttpStatus.OK);
    }

    // Endpoint para obter um usuário pelo ID
    @GetMapping("/{id}")
    public ResponseEntity<Endereco> obterEnderecoPorId(@PathVariable Long id) {
        Endereco endereco = enderecoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (endereco == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(endereco, HttpStatus.OK);
    }

    // Endpoint para atualizar um endereço existente
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

    // Endpoint para excluir um endereço pelo ID
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
