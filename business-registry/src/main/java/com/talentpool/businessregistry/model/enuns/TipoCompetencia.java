package com.talentpool.businessregistry.model.enuns;

public enum TipoCompetencia {
	EXPERIENCIA("EXPERIENCIA"),
	LINGUAGEM("LINGUAGEM");

    private String role;

    TipoCompetencia(String role){
        this.role = role;
    }

    public String getRole(){
        return role;
    }
}
