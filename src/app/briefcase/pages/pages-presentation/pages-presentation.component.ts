import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pages-presentation',
  standalone: true,
  imports: [],
  templateUrl: './pages-presentation.component.html',
  styleUrl: './pages-presentation.component.css'
})
export  default class PagesPresentationComponent {
  constructor(){}
  
  @ViewChild('textarea') textarea!: ElementRef;
  defaultText: string = 'jose.alvarezbe@gmail.com';

  clipboard() {
    const text = this.textarea.nativeElement.value;
    navigator.clipboard.writeText(text).then(() => {
      this.showTooltip()
    })
    .catch(err => {
      console.error(err);
    });
  }

  showTooltip() {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
      tooltip.classList.add('show');
      setTimeout(() => {
        tooltip.classList.remove('show');
      }, 2000); // Ocultar el tooltip después de 2 segundos
    }
  }



}
