import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <ul>
      <li><a routerLink='/default' routerLinkActive="active-link">default</a></li>
      <li><a routerLink='/on-push' routerLinkActive="active-link">on-push</a></li>
      <li><a routerLink='/on-push-manual' routerLinkActive="active-link">on-push-manual</a></li>
    </ul>
    <router-outlet />
  `,
  styleUrl: './app.component.less'
})
export class AppComponent {
}
