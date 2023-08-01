// Importe as dependências necessárias
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  // Método para criar um novo usuário
  criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  // Método para obter todos os usuários
  obterUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  // Método para obter um usuário pelo ID
  obterUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar um usuário existente
  atualizarUsuario(id: number, usuarioAtualizado: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuarioAtualizado);
  }

  // Método para excluir um usuário pelo ID
  excluirUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
