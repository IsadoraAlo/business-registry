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
import com.talentpool.businessregistry.model.vaga.questionario.Questionario;
import com.talentpool.businessregistry.repository.vaga.questionario.QuestionarioRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/questionarios")
public class QuestionarioController {
	private static final String MESSAGE_ERROR = "Não existe questionário com o id ";
	
    private final QuestionarioRepository questionarioRepository;

    @Autowired
    public QuestionarioController(QuestionarioRepository questionarioRepository) {
        this.questionarioRepository = questionarioRepository;
    }

    @PostMapping
    public ResponseEntity<Questionario> criarQuestionario(@RequestBody Questionario questionario) {
        Questionario novoQuestionario = questionarioRepository.save(questionario);
        return new ResponseEntity<>(novoQuestionario, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Questionario>> obterQuestionarios() {
        List<Questionario> questionarios = questionarioRepository.findAll();
        return new ResponseEntity<>(questionarios, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Questionario> obterQuestionarioPorId(@PathVariable Long id) {
        Questionario questionario = questionarioRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (questionario == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(questionario, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Questionario> atualizarQuestionario(@PathVariable Long id, @RequestBody Questionario questionarioAtualizado) {
        Questionario questionarioExistente = questionarioRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (questionarioExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        questionarioExistente.setPontuacaoTotal(questionarioAtualizado.getPontuacaoTotal());
        Questionario questionarioAtualizadoNoBanco = questionarioRepository.save(questionarioExistente);
        return new ResponseEntity<>(questionarioAtualizadoNoBanco, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirQuestionario(@PathVariable Long id) {
        Questionario questionarioExistente = questionarioRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (questionarioExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        questionarioRepository.delete(questionarioExistente);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
