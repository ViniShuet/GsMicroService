import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private eventos: Evento[] = [];

  add(evento: Evento) {
    this.eventos.push(evento);
  }

  getAll(): Evento[] {
    return this.eventos;
  }
}
