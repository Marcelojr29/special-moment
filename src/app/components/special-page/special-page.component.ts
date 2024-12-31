import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-page',
  templateUrl: './special-page.component.html',
  styleUrls: ['./special-page.component.scss'],
})
export class SpecialPageComponent {
  showAnimation = false;
  hearts: { style: any }[] = [];

  constructor(private router: Router) {}

  onHeartClick() {
    this.showAnimation = true;
    this.generateHearts();

    // Aguarda a animação antes de redirecionar
    setTimeout(() => {
      this.router.navigate(['/photo-page']).catch((error) => {
        console.error('Erro ao redirecionar:', error);
      });
    }, 3000); // Duração ajustada para 3 segundos
  }

  generateHearts() {
    const interval = setInterval(() => {
      const heart = {
        style: {
          left: Math.random() * 100 + 'vw',
          top: Math.random() * 100 + 'vh',
          animationDuration: Math.random() * 2 + 2 + 's',
        },
      };
      this.hearts.push(heart);

      // Remove o coração após a animação
      setTimeout(() => {
        this.hearts.shift();
      }, 4000);
    }, 300);

    // Para a criação dos corações após 3 segundos
    setTimeout(() => clearInterval(interval), 3000);
  }
}
