import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LocalStorage {
  public getUsuarioLogado(){
    const user = localStorage.getItem('Usuário logado') as string
    return JSON.parse(user)
  }

  public setUsuarioLogado(login: any) {
    localStorage.setItem('Usuário logado', JSON.stringify(login));
  }
}
