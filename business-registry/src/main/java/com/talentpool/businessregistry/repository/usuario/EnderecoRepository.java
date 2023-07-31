package com.talentpool.businessregistry.repository.usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpool.businessregistry.model.usuario.Endereco;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long>{

}
