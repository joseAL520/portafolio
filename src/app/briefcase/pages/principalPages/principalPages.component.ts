import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import PagesProyectsComponent from "../pages-proyects/pages-proyects.component";
import PagesPresentationComponent from "../pages-presentation/pages-presentation.component";

@Component({
  selector: 'app-principal-pages',
  standalone: true,
  imports: [
    CommonModule,
    PagesProyectsComponent,
    PagesPresentationComponent
],
  template: ` 

    <main>
      <app-pages-presentation/>
      <app-pages-proyects/>
    </main>
    


  `,
  styleUrl: './principalPages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PrincipalPagesComponent { }
