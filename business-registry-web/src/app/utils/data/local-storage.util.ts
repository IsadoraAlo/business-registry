import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario/usuario.model";

@Injectable({ providedIn: "root" })
export class LocalStorage {

  public get UsuarioLogado() {
    const data = [JSON.parse(localStorage.getItem('Usuário logado') as string)];
    const usuario: Usuario = new Usuario();
    data.find((body) => {
      usuario.id = body.usuario.id;
      usuario.celular = body.usuario.celular;
      usuario.documento = body.usuario.documento;
      usuario.email = body.usuario.email;
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

  public setUsuarioLogado(login: any) {
    localStorage.setItem('Usuário logado', JSON.stringify(login));
  }
}
