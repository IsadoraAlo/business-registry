package com.talentpool.businessregistry.repository.usuario;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpool.businessregistry.model.usuario.Endereco;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long>{
	List<Endereco> findByUsuarioId(Long id);
}
