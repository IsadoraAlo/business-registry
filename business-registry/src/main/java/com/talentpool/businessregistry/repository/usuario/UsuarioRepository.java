package com.talentpool.businessregistry.repository.usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpool.businessregistry.model.usuario.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

}
