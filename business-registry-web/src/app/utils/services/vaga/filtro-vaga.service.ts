import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../../models/vaga/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  private baseUrl = 'http://localhost:8080/vagas'; // Atualize a URL de acordo com a sua API

  constructor(private http: HttpClient) {}

  filtrarPorModalidade(modalidade: string): Observable<Vaga[]> {
    const url = `${this.baseUrl}/modalidade/${modalidade}`;
    return this.http.get<Vaga[]>(url);
  }

  filtrarPorCargo(cargo: string): Observable<Vaga[]> {
    const url = `${this.baseUrl}/cargo/${cargo}`;
    return this.http.get<Vaga[]>(url);
  }

  filtrarPorAreaAtuacao(areaAtuacao: string): Observable<Vaga[]> {
    const url = `${this.baseUrl}/area-atuacao/${areaAtuacao}`;
    return this.http.get<Vaga[]>(url);
  }

  filtrarPorEtnia(etnia: string): Observable<Vaga[]> {
    const url = `${this.baseUrl}/etnia/${etnia}`;
    return this.http.get<Vaga[]>(url);
  }

  filtrarPorGenero(genero: string): Observable<Vaga[]> {
    const url = `${this.baseUrl}/genero/${genero}`;
    return this.http.get<Vaga[]>(url);
  }

  filtrarPorDeficiencia(deficiencia: string): Observable<Vaga[]> {
    const url = `${this.baseUrl}/deficiencia/${deficiencia}`;
    return this.http.get<Vaga[]>(url);
  }
}
