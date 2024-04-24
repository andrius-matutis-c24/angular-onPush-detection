import { Component, input } from '@angular/core';
import { NameChildComponent } from './name-child.component';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [NameChildComponent],
  styles: [':host{display: block}'],
  template: `
    Name: {{user().name}}
    <app-name-child></app-name-child>
  `,
})
export class NameComponent {
  public user = input.required<{name: string}>();
}
