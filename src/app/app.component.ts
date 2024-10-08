import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PujaCanada';

  // ngOnInit(): void {
  //   this.playAudio('../../../assets/chanting.mp3'); // Adjust path if necessary
  // }

  // playAudio(url: string): void {
  //   const audio = new Audio(url);
  //   audio.play();
  // }
}

