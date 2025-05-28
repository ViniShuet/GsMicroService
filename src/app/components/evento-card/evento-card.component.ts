import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Evento } from '../../interfaces/evento';

@Component({
  selector: 'app-evento-card',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './evento-card.component.html',
  styleUrls: ['./evento-card.component.css']
})
export class EventoCardComponent {
  eventoForm: FormGroup;
  eventos: Evento[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.eventoForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      data: [''],
      horario: [''],
      local: ['']
    });
  }

  save() {
    if (this.eventoForm.valid) {
      const formData = this.eventoForm.value;

      const eventoAdd: Evento = {
        id: Date.now(),
        titulo: formData.titulo,
        data: formData.data,
        horario: formData.horario,
        local: formData.local
      };

      this.eventos.push(eventoAdd);
      this.eventoForm.reset();
    }
  }

  mensagemInscricao: string | null = null;

  participarEvento(evento: Evento) {
    this.mensagemInscricao = `Você se inscreveu no evento: ${evento.titulo}`;
  }

}
