package com.talentpool.businessregistry.controller.vaga.questionario;

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
import com.talentpool.businessregistry.model.vaga.questionario.Pergunta;
import com.talentpool.businessregistry.repository.vaga.questionario.PerguntaRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/perguntas")
public class PerguntaController {
private static final String MESSAGE_ERROR = "Não existe pergunta com o id ";
	
    private final PerguntaRepository perguntaRepository;

    @Autowired
    public PerguntaController(PerguntaRepository perguntaRepository) {
        this.perguntaRepository = perguntaRepository;
    }

    @PostMapping
    public ResponseEntity<Pergunta> criarPergunta(@RequestBody Pergunta pergunta) {
        Pergunta novoPergunta = perguntaRepository.save(pergunta);
        return new ResponseEntity<>(novoPergunta, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Pergunta>> obterPerguntas() {
        List<Pergunta> perguntas = perguntaRepository.findAll();
        return new ResponseEntity<>(perguntas, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pergunta> obterPerguntaPorId(@PathVariable Long id) {
        Pergunta pergunta = perguntaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (pergunta == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(pergunta, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pergunta> atualizarPergunta(@PathVariable Long id, @RequestBody Pergunta perguntaAtualizada) {
        Pergunta perguntaExistente = perguntaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (perguntaExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        perguntaExistente.setPontuacao(perguntaAtualizada.getPontuacao());
        perguntaExistente.setQuestao(perguntaAtualizada.getQuestao());
        perguntaExistente.setQuestionarioId(perguntaAtualizada.getQuestionarioId());
        Pergunta perguntaAtualizadaNoBanco = perguntaRepository.save(perguntaExistente);
        return new ResponseEntity<>(perguntaAtualizadaNoBanco, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirPergunta(@PathVariable Long id) {
        Pergunta perguntaExistente = perguntaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (perguntaExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        perguntaRepository.delete(perguntaExistente);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
