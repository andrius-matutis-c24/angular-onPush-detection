import { Component, Signal, input } from '@angular/core';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [],
  styles: [':host{display: block}'],
  template: 'Name: {{user().name}}',
})
export class NameComponent {
  public user = input.required<{name: string}>();
}
