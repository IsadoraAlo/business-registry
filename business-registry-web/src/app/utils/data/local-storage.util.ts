import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario/usuario.model";
import { Vaga } from "../models/vaga/vaga.model";

@Injectable({ providedIn: "root" })
export class LocalStorage {
  public setUsuarioLogado(login: any) {
    localStorage.setItem('Usuário logado', JSON.stringify(login));
  }

  public get UsuarioLogado() {
    const data = [JSON.parse(localStorage.getItem('Usuário logado') as string)];
    const usuario: Usuario = new Usuario();
    data.find((body) => {
      usuario.id = body.usuario.id;
      usuario.celular = body.usuario.celular;
      usuario.documento = body.usuario.documento;
      usuario.email = body.usuario.email;
      usuario.sobre = body.usuario.sobre;
      usuario.status = body.usuario.status;
      usuario.senha = body.usuario.senha;
      usuario.nome = body.usuario.nome;
      usuario.tipo = body.usuario.tipo;
    });
    return usuario
  }

  public get Token() {
    const data = [JSON.parse(localStorage.getItem('Usuário logado') as string)];
    let tokenLog: string = '';
    data.find((body) => {
      tokenLog = body.token;
    });
    return tokenLog;
  }

  public setVaga(vaga: any) {
    localStorage.setItem('Vaga', JSON.stringify(vaga));
    console.log(localStorage)
  }

  public get Vaga() {
    const data = [JSON.parse(localStorage.getItem('Vaga') as string)];
    const vaga: Vaga = new Vaga();
    data.find((body) => {
      vaga.id = body.id;
      vaga.areaAtuacao = body.areaAtuacao;
      vaga.beneficios = body.beneficios;
      vaga.candidatos = body.candidatos;
      vaga.cargo = body.cargo;
      vaga.deficiencia = body.deficiencia;
      vaga.etapas = body.etapas;
      vaga.modalidade = body.modalidade;
      vaga.pretencaoSalarial = body.pretencaoSalarial;
      vaga.qualificacoes = body.qualificacoes;
      vaga.responsabilidades = body.responsabilidades;
      vaga.status = body.status;
      vaga.titulo = body.titulo;
      vaga.usuario = body.usuario;
      vaga.vagaPcd = body.vagaPcd
    });
    return vaga
  }
}
