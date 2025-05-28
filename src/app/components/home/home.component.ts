import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
exibir = true;
titulo = "Global Solution";
descricao = "Uma jornada tecnológica rumo ao futuro";
dataEvento = "26 de maio";
destaques = ["Inovacao", "Tecnologia", "Impacto Social"];

exibirInformacoes() {
  this.exibir = !this.exibir;
}

}
