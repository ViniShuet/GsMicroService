import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Evento } from '../../interfaces/evento';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.css']
})
export class ProgramacaoComponent {
  eventos: Evento[] = [
    { id: 1, titulo: 'Workshop de Angular', data: '2023-11-01', horario: '10:00', local: 'Sala 101' },
    { id: 2, titulo: 'Palestra sobre IA', data: '2023-11-02', horario: '14:00', local: 'Auditório Principal' },
    { id: 3, titulo: 'Hackathon Global', data: '2023-11-03', horario: '09:00', local: 'Sala de Inovação' }
  ];

  mensagemInscricao: string | null = null;

  participarEvento(evento: Evento) {
    this.mensagemInscricao = `Você se inscreveu no evento: ${evento.titulo}`;
  }
}
