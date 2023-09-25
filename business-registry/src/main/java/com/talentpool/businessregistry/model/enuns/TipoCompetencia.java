package com.talentpool.businessregistry.model.enuns;

public enum TipoCompetencia {
	EXPERIENCIA("EXPERIENCIA"),
	LINGUAGEM("LINGUAGEM"),
	CURSOS("CURSOS"),
	SOCIAL("SOCIAL");


    private String role;

    TipoCompetencia(String role){
        this.role = role;
    }

    public String getRole(){
        return role;
    }
}
