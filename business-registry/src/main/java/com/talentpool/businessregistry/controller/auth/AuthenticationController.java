package com.talentpool.businessregistry.controller.auth;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpool.businessregistry.dto.AuthenticationDTO;
import com.talentpool.businessregistry.dto.LoginResponseDTO;
import com.talentpool.businessregistry.model.usuario.Usuario;
import com.talentpool.businessregistry.repository.usuario.UsuarioRepository;
import com.talentpool.businessregistry.service.TokenService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

	@Autowired
    private UsuarioRepository usuarioRepository;
	@Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data){
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.senha());
        var auth = this.authenticationManager.authenticate(usernamePassword);
        var token = tokenService.generateToken((Usuario) auth.getPrincipal());
        var user = this.usuarioRepository.findByEmail(data.email());
        return ResponseEntity.ok(new LoginResponseDTO(token, user));
    }
    
}
