import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario/usuario.model";
import { Vaga } from "../models/vaga/vaga.model";
import { Etapa } from "../models/vaga/etapa.model";
import { ProcessoSeletivo } from "../models/vaga/processo-seletivo.model";

@Injectable({ providedIn: "root" })
export class LocalStorage {
  public setUsuarioLogado(login: any) {
    localStorage.setItem('Usuário logado', JSON.stringify(login));
  }

  public get UsuarioLogado() {
    const data = JSON.parse(localStorage.getItem('Usuário logado') as string);
    const usuario: Usuario = new Usuario();
    if (data.hasOwnProperty('usuario')) {
      usuario.id = data.usuario.id;
      usuario.celular = data.usuario.celular;
      usuario.documento = data.usuario.documento;
      usuario.email = data.usuario.email;
      usuario.sobre = data.usuario.sobre;
      usuario.status = data.usuario.status;
      usuario.senha = data.usuario.senha;
      usuario.nome = data.usuario.nome;
      usuario.tipo = data.usuario.tipo;
    }
    else {
      usuario.id = data.id;
      usuario.celular = data.celular;
      usuario.documento = data.documento;
      usuario.email = data.email;
      usuario.sobre = data.sobre;
      usuario.status = data.status;
      usuario.senha = data.senha;
      usuario.nome = data.nome;
      usuario.tipo = data.tipo;
    }
    return usuario;
  }


  public cleanStorage(obj: string): void {
    localStorage.removeItem(obj);
  }

  public cleanAllStorage(): void {
    localStorage.clear();
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


  public setEtapa(etapa: any) {
    localStorage.setItem('Etapa', JSON.stringify(etapa));
  }

  public get Etapa() {
    const data = JSON.parse(localStorage.getItem('Etapa') as string);
    const etapa: Etapa = new Etapa();
    if (data) {
      etapa.descricao = data?.descricao;
      etapa.entrevista = data?.entrevista;
      etapa.id = data?.id;
      etapa.numeracao = data?.numeracao;
      etapa.questionario = data?.questionario;
      etapa.tipo = data?.tipo;
      etapa.titulo = data?.titulo;
      etapa.vagaId = data?.vagaId;
    }
    return etapa;
  }

  public setProcesso(processo: any) {
    localStorage.setItem('Processo', JSON.stringify(processo));
  }

  public get Processo() {
    const data = JSON.parse(localStorage.getItem('Processo') as string);
    const processo: ProcessoSeletivo = new ProcessoSeletivo();
    if (data) {
      processo.candidatoAprovado = data?.candidatoAprovado;
      processo.candidatoId = data?.candidatoId;
      processo.candidatoReprovado = data?.candidatoReprovado;
      processo.etapaId = data?.etapaId;
      processo.id = data?.id;
      processo.pontuacaoCandidato = data?.pontuacaoCandidato;
      processo.vagaId = data?.vagaId;
    }
    return processo;
  }

}
