import { GiftsComponent } from './components/gifts/gifts.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InspiracaoComponent } from './components/inspiracao/inspiracao.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { ProgramacaoComponent } from './components/programacao/programacao.component';
import { EventoCardComponent } from './components/evento-card/evento-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FooterComponent,
    GiftsComponent,
    HeaderComponent,
    HomeComponent,
    InspiracaoComponent,
    ParceirosComponent,
    ProgramacaoComponent,
    EventoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gsmicroservice';
  
}
