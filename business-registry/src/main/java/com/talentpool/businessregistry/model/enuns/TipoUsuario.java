package com.talentpool.businessregistry.model.enuns;

public enum TipoUsuario {
    ADMIN("ADMIN"),
    EMPRESA("EMPRESA"),
	CANDIDATO("CANDIDATO");

    private String role;

    TipoUsuario(String role){
        this.role = role;
    }

    public String getRole(){
        return role;
    }
}
