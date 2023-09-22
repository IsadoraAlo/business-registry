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
import com.talentpool.businessregistry.model.vaga.questionario.Resposta;
import com.talentpool.businessregistry.repository.vaga.questionario.RespostaRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/respostas")
public class RespostaController {
	private static final String MESSAGE_ERROR = "Não existe resposta com o id ";
	
    private final RespostaRepository respostaRepository;

    @Autowired
    public RespostaController(RespostaRepository respostaRepository) {
        this.respostaRepository = respostaRepository;
    }

    @PostMapping
    public ResponseEntity<Resposta> criarResposta(@RequestBody Resposta resposta) {
        Resposta novoResposta = respostaRepository.save(resposta);
        return new ResponseEntity<>(novoResposta, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Resposta>> obterRespostas() {
        List<Resposta> respostas = respostaRepository.findAll();
        return new ResponseEntity<>(respostas, HttpStatus.OK);
    }
    
    @GetMapping("/pergunta/{id}")
    public ResponseEntity<List<Resposta>> obterRespostasPorPerguntaId(@PathVariable Long id) {
        List<Resposta> respostas = respostaRepository.findRespostaByPerguntaId(id);
        return new ResponseEntity<>(respostas, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Resposta> obterRespostaPorId(@PathVariable Long id) {
        Resposta resposta = respostaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (resposta == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(resposta, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Resposta> atualizarResposta(@PathVariable Long id, @RequestBody Resposta respostaAtualizada) {
        Resposta respostaExistente = respostaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (respostaExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        respostaExistente.setPerguntaId(respostaAtualizada.getPerguntaId());
        respostaExistente.setAlternativa(respostaAtualizada.getAlternativa());
        respostaExistente.setAlternativaCorreta(respostaAtualizada.getAlternativaCorreta());
        respostaExistente.setDissertativa(respostaAtualizada.getDissertativa());
        Resposta respostaAtualizadaNoBanco = respostaRepository.save(respostaExistente);
        return new ResponseEntity<>(respostaAtualizadaNoBanco, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirResposta(@PathVariable Long id) {
        Resposta respostaExistente = respostaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MESSAGE_ERROR + id));
        if (respostaExistente == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        respostaRepository.delete(respostaExistente);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
